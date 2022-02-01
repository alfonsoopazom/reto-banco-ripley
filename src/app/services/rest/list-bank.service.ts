import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BankModel} from "../../models/bank.model";

@Injectable({
  providedIn: 'root'
})
export class ListBankService {

  urlListBank = environment.LISTBANK;

  constructor(private httpClient: HttpClient) {
  }

  getAllListOfBank() {
    return this.httpClient.get<BankModel>(this.urlListBank);
  }

}
