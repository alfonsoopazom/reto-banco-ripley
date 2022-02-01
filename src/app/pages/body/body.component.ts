import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransactionService} from "../../services/rest/transaction.service";
import {ListBankService} from "../../services/rest/list-bank.service";
import {BankModel} from "../../models/bank.model";
import {TypeAccountEnum} from "../../enums/type-account.enum";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  public enumKeyAccountBank = [];
  public bankName: string = '';
  public bankTypeAccount: string = '';
  public disabledTypeAccount = true;
  // @ts-ignore
  addreesserForm: FormGroup

  constructor(private fb: FormBuilder,
              private transactionService: TransactionService,
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
      phone: [null, [Validators.required]],
      bankName: [null, [Validators.required]],
      bankTypeAccount: [null, [Validators.required]],
      accountType: [null, [Validators.required]],
    });
  }

  populateListAccountBank() {
    console.log(this.addreesserForm.get('bankName')?.value);
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
      this.snackBar.open("Destinatario agregado exitosamente", "", {
        duration: 1500,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ["custom-style"],
      });

    }
    console.log(this.addreesserForm.value);
  }

}
