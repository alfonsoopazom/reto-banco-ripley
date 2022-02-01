import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {TransactionDetailModel} from "../../models/transaction-detail.model";
import {ClientModel} from "../../models/destination-client.model";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private urlApi = environment.URLAPI;
  public httpOptions: any;

  constructor(private httpClient: HttpClient) {
  }

  transactionTo(object: ClientModel, rut: string) {
    return this.httpClient.post(this.urlApi + '/transfer-to?_rut=' + rut, object, {headers: this.httpOptions});
  }

  getAllTransactions(){
    return this.httpClient.get<TransactionDetailModel[]>(this.urlApi + '/getAllAddressee', {headers: this.httpOptions});
  }


}
