import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  cities: SelectItem[];
  
      selectedCity: string = 'New York';
  
      constructor() {
          this.cities = [];
          this.cities.push({label:'New York', value:'New York'});
          this.cities.push({label:'Rome', value:'Rome'});
          this.cities.push({label:'London', value:'London'});
          this.cities.push({label:'Istanbul', value:'Istanbul'});
          this.cities.push({label:'Paris', value:'Paris'});
      }

  ngOnInit() {
    console.log('Hello Home');
  }

}
