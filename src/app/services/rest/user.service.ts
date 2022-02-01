import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ClientModel} from "../../models/destination-client.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlApi = environment.URLAPI;
  public httpOptions: any;

  constructor(private httpClient: HttpClient) { }

  saveAddressee(newAddressee: ClientModel) {
    return this.httpClient.post(this.urlApi + '/add', newAddressee,{headers: this.httpOptions});
  }

  findAccountByrutOrName(value: any) {
    return this.httpClient.get(this.urlApi + '/find-account-by-rut-or-name?value=' + value, {headers: this.httpOptions});
  }

}
