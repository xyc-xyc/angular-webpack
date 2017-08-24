import { Component , ViewChild} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {DataView} from '../dataview/dataview.component';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ApiService],
})
export class HomeComponent {
  @ViewChild("dv1") dv1:DataView;
  
  load(event:any){
    console.log(event)
    let para = <string[]>event;
    this.dv1.load(para[0], para[1]);
  }

  tabChanged(){
    this.dv1.studydata=null;
  }
}
