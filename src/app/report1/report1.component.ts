import { Component, EventEmitter, Output } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'report-1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.scss'],
})
export class Report1 {
  @Output() onLoad = new EventEmitter<string[]>();

  types: SelectItem[];
  type: string = 'Raw';
  genders: SelectItem[];
  gender: string = 'All';

  constructor() {
    this.types = [];
    this.types.push({ label: 'Raw Data', value: 'Raw' });
    this.types.push({ label: 'Group by Age', value: 'Age' });
    this.types.push({ label: 'Group by Year', value: 'Year' });

    this.genders = [];
    this.genders.push({ label: 'All', value: 'All' });
    this.genders.push({ label: 'Male', value: 'M' });
    this.genders.push({ label: 'Female', value: 'F' });
  }

  load() {
    this.onLoad.emit([this.type, this.gender]);
  }
}