import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit, OnChanges {

  public loggedNav: Array<any>
  public unLoggedNav: Array<any>
  public activeNav: Array<any>

  @Input() title: string

  constructor() {
    this.unLoggedNav = [
      {
        value: 'Accueil',
        path: '/'
      },
      {
        value: 'Inscription',
        path: '/register'
      },
      {
        value: 'Connexion',
        path: '/login'
      }
    ]

    this.loggedNav = [
      {
        value: 'Accueil',
        path: '/'
      },
      {
        value: 'Mon compte',
        path: '/me'
      }
    ]
   }

  private checkUserToken = () => {
    window.localStorage.getItem('user-token') 
    ? this.activeNav = this.loggedNav 
    : this.activeNav = this.unLoggedNav 
  }

  ngOnInit() {
    this.checkUserToken()
  }

  ngOnChanges(changes: any) {
    console.log(changes)
  }

}
