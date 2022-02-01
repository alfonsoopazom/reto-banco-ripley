import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlApi = environment.URLAPI;
  public httpOptions: any;

  constructor(private httpClient: HttpClient) { }

  saveAddressee() {
    return this.httpClient.post(this.urlApi, {headers: this.httpOptions});
  }

  findAccountByrutOrName(value: any) {
    return this.httpClient.get(this.urlApi + '/find-account-by-rut-or-name?value=' + value, {headers: this.httpOptions});
  }

  getAllAddressee(){
    return this.httpClient.get(this.urlApi + '/getAllAddressee', {headers: this.httpOptions});
  }


}
