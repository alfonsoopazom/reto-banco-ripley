import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  public title: string = 'NUEVA TRANSFERNCIA'

  constructor() { }

  ngOnInit(): void {
  }

}
