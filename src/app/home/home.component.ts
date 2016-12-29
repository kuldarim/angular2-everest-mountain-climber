import { Component, OnInit, Sanitizer } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  basicRowHeight = 80;
  fitListHeight = '400px';
  ratioGutter = 1;

  persons: any;
  prefix: string ='data:image/png;base64,';

  constructor(private apiService: ApiService, private sanitizer: Sanitizer) {
    // this.apiService.getPictures()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.imageData = 'data:image/png;base64,' + data;
    //   });

    this.apiService.getPictures().then(data => {
      this.persons = data.persons;
      console.log(this.persons);
    });
  }

  getPrefixed(data: string) {
    return this.prefix + data;
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
