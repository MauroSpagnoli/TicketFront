import { Injectable } from '@angular/core';
import { payer } from '../interface/payer';
import { HttpClient } from '@angular/common/http';
import { payment } from '../interface/payment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getPayers(){
    return this.http.get<payer[]>("https://localhost:44393/Users")
  }

  getPayments(){
    return this.http.get<payment[]>("https://localhost:44393/Payment")
  }

  getSpecificPayment(id:string){
    return this.http.get<payment[]>("https://localhost:44393/Payment/"+id)
  }

  createUser(payer:payer){
    console.log("creousuario", payer)
    var headers = { 'Content-type': 'application/json', 'Accept' : "*/*" };
    var json = JSON.stringify(payer)
    console.log(json)
    return this.http.post<any>("https://localhost:44393/Users",json, {headers}).subscribe((data) => {console.log(data)})
  }
}
