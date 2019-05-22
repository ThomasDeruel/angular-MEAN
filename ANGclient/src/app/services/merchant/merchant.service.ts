import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private apiUrl: string;

  constructor() { 
    this.apiUrl = `https://mcba.dwsapp.io/api/merchant/`
  }


  /*public authenticate = (): Promise<any> => {

  }*/
  private getData(res: any){
    return res || {};
  };
}
