import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  title:any ="data";

  base:string = process.env.DATA_URL_BASE;

  constructor(private http: Http) { 
  }
  
  getData(gender:string, type:string ) : Observable<any> {
          return this.http.get(this.base+'/data?gender='+gender+"&type="+type)
          .map(this.extractData)
  }
  
    private extractData(res: Response) {
      let body = res.json();
      return body || [];
    }
}
