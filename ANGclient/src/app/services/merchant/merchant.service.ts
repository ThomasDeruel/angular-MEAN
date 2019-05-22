import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private apiUrl: string;

  constructor(
    private HttpClient: HttpClient
  ) { 
    this.apiUrl = environment.apiUrl;
  }

  // TODO: créer la fonction
  public readAllItems = () => {
    return this.HttpClient.get(`${this.apiUrl}/merchant/`)
    .toPromise().then(this.getData).catch(this.handleError)
  }

  /*public authenticate = (): Promise<any> => {

  }*/
  private getData(res: any){
    return res || {};
  };

  private handleError(err: any){
    return Promise.reject(err.error);
  };
}
