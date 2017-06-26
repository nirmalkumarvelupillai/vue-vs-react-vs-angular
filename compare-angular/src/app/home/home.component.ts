import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public heading:string;
  public subheading:string;
  constructor() { 
    this.heading = 'Digital Innovation Master';
    this.subheading = 'However it was a lion. Gluten. Not just my sorrow, carrots easy to put passengers. For, not to the supreme ends of. The refinancing. Clinical it is now. Volleyball court football macro developer need Vulputate';
  
  }

  ngOnInit() {
  }

}
