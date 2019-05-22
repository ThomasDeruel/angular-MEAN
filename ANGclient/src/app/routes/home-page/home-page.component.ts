import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../services/merchant/merchant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [ MerchantService ]
})
export class HomePageComponent implements OnInit {
  
  public marchantCollection: Array<any>;

  constructor(
    // on Inject notre class = on l'instancie
    private MerchantService: MerchantService
  ) { }

  private getMerchantList = () => {
    this.MerchantService.readAllItems()
    .then(apiResponse => this.marchantCollection = apiResponse.data)
    .catch(apiResponse => console.log(apiResponse))
  }
  ngOnInit() {
    this.getMerchantList();
  }

}
