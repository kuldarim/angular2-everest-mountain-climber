import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs';

@Injectable()
export class ApiService {

  constructor (private http: Http) {}

  getPictures() {
    return this.http.get('http://localhost:8080/photo2')
      .map((res:Response) => res._body)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

}
