import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShortUrlService {
  result: any;
  data: any;

  constructor(public http: Http) { }

  load(param) {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    let key = '';
    let body = { 'longUrl': param };
    let link = `https://www.googleapis.com/urlshortener/v1/url?key=${key}`;
    let dataSync = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });

    let options = new RequestOptions({ headers: headers });

    return new Promise(resolve => {
      this.http.post(link, body, options)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data.id);
        });
    });

  }
}