import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title:string = 'app';
  public isActive:boolean = false;
  toggleNav(){
    this.isActive = !this.isActive;
  }
}
