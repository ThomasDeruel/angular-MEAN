import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header [title]="appTitle"></app-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  
  public appTitle: string;

  constructor(){
    this.appTitle = `Hello Stranger`
  }

  ngOnInit(){}
}
