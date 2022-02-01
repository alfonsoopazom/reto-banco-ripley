import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private urlApi = environment.URLAPI;
  public httpOptions: any;

  constructor(private httpClient: HttpClient) {
  }

  transactionTo(object: any, rut: string) {
    return this.httpClient.post(this.urlApi + '/transfer-to?_rut=' + rut, object, {headers: this.httpOptions});
  }

}
