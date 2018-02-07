import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GoodreadsService {
  private url:string = "http://openlibrary.org/";
  private key:string =  "DqfNOh8DyBDqN8Zg4KPw";
  private headers:HttpHeaders;
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  search(query){
    let method = "search.json?"
    let url = this.url + method + "title=" + query.split(" ").join("+");
    // let headers = this.headers;
    return this.http.request("get", url, {headers:this.headers}).toPromise();
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
