import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransactionService} from "../../services/rest/transaction.service";
import {ListBankService} from "../../services/rest/list-bank.service";
import {BankModel} from "../../models/bank.model";
import {TypeAccountEnum} from "../../enums/type-account.enum";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../services/rest/user.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public title: string = 'NUEVO/A DESTINATARIO/A'
  public listOfBankArray: any = [];
  public listOfBankAccount = TypeAccountEnum;
  public auxListOfBankAccount = null;
  public bankName: string = '';
  public disabledTypeAccount = true;
  RUT = '18.220.258-4'
  // @ts-ignore
  addreesserForm: FormGroup

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private listOfBakServices: ListBankService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.initReport();
    this.getListOfBanks();
  }

  initReport() {
    this.addreesserForm = this.fb.group({
      rut: [null, [Validators.required]],
      name: [null, [Validators.required]],
      email: [null, [Validators.email]],
      phoneNumber: [null, [Validators.required]],
      targetBank: [null, [Validators.required]],
      accountType: [null, [Validators.required]],
      accountNumber: [null, [Validators.required]],
    });
  }

  populateListAccountBank() {
  }

  getListOfBanks() {
    this.listOfBakServices.getAllListOfBank().subscribe((res: BankModel) => {
      this.listOfBankArray = res;
      if (this.listOfBankArray.length > 0) {
        this.disabledTypeAccount = false
      }
    });
  }

  onSubmit() {
    if (this.addreesserForm.valid) {
      const auxObjectToSend = this.addreesserForm.value;
      this.snackBar.open("Destinatario agregado exitosamente", "", {
        duration: 1500,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ["success-style"],
      });
      this.userService.saveAddressee(auxObjectToSend).subscribe();
    } else {
      this.snackBar.open("Destinatario no pudo ser agregado", "", {
        duration: 1500,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ["warning-style"],
      });
    }
  }

}
