import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products:Array<any> = [];
  constructor(private http:Http) {
    this.http.get('http://jsonplaceholder.typicode.com/posts')
    .map(response => response.json())
    .subscribe(res => this.products = res);

   }

  ngOnInit() {
  }

}
