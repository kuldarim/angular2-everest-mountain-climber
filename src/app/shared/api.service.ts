import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs';

@Injectable()
export class ApiService {

  constructor (private http: Http) {}

  getPictures() {
    return this.http.get('http://localhost:8080/photos')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
