import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../services/merchant/merchant.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [ MerchantService ]
})
export class HomePageComponent implements OnInit {
  
  public marchantCollection: Array<any>;
  public marchantCollectionRaw: Array<string>;
  public categoriesCollection: Array<string>;
  public categoriesCollectionSlug: Array<string>;
  public activeCategory: string;
  constructor(
    // on Inject notre class = on l'instancie
    private MerchantService: MerchantService
  ) {
    this.categoriesCollection = [];
    this.categoriesCollectionSlug = [];
    this.activeCategory = "all";
   }

  private getMerchantList = () => {
    this.MerchantService.readAllItems()
    .then(apiResponse => {
      this.marchantCollection = apiResponse.data
      this.marchantCollectionRaw = apiResponse.data
      this.getMerchantCategories(apiResponse.data)
    })
    .catch(apiResponse => console.log(apiResponse))
  }

  private getMerchantCategories = (data: any) => {
    data.map((item: any)=>{
      item.category.isActive = false;
      if(this.categoriesCollectionSlug.indexOf(item.category.slug) === -1){
        this.categoriesCollectionSlug.push(item.category.slug)
        this.categoriesCollection.push(item.category)
        
      }
    })
    console.log(this.categoriesCollection)
    console.log(this.categoriesCollectionSlug)
  }

  public sortMerchant = (cat: string) => {

    this.activeCategory = cat;
    console.log(cat)
    const tempArray = [];

    this.marchantCollectionRaw.map( (item:any) => {
      if( item.category.slug === cat) {
        tempArray.push(item);
      }
    })
    this.marchantCollection =  tempArray;
  }
  ngOnInit() {
    this.getMerchantList();
  }

}
