import { Component, EventEmitter, Output } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'report-2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.scss'],

})
export class Report2 {
  @Output() onLoad = new EventEmitter<string[]>();

  types: SelectItem[];
  type: string = 'Raw';
  genders: SelectItem[];
  gender: string = null;

  constructor() {
    this.types = [];
    this.types.push({ label: 'Raw Data', value: 'Raw' });
    this.types.push({ label: 'Group by Age', value: 'Age' });
    this.types.push({ label: 'Group by Year', value: 'Year' });

    this.genders = [];
    this.genders.push({ label: 'Select Gender', value: null });
    this.genders.push({ label: 'All', value: 'All' });
    this.genders.push({ label: 'Male', value: 'M' });
    this.genders.push({ label: 'Female', value: 'F' });

  }

  load() {
    if(this.gender == null){
      this.gender = this.genders[1].value;
    }
    this.onLoad.emit([this.type, this.gender]);
  }
}