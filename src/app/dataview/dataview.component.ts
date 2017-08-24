import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'data-view',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss'],
  providers: [ApiService]
})
export class DataView {
  tableHeight: any = 298;

  studydata: any[] = null;
  fields: any = [];

  constructor(private api: ApiService) {
  }

  load(type: any, gender: any) {
    this.api.getData(gender, type).subscribe(f => {
      this.studydata = f;
      if (type == 'Age') {
        this.fields = [
          { id: 'age', header: 'Age' },
          { id: 'count', header: 'Count' },
        ];

      } else if (type == 'Year') {
        this.fields = [
          { id: 'year', header: 'Year' },
          { id: 'count', header: 'Count' },
        ];

      } else {
        this.fields = [
          { id: 'id', header: 'Id' },
          { id: 'gender', header: 'Gender' },
          { id: 'age', header: 'Age' },
          { id: 'stage', header: 'Stage' },
          { id: 'year', header: 'Year' },
        ];
      }
    });
  }
}