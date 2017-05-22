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

  recognizedName: string = '';

  constructor(private apiService: ApiService, private sanitizer: Sanitizer) {

    this.apiService.getPictures().then(data => {
      for (let i = 0; i < data.persons.length; i++ ) {
        data.persons[i].images = data.persons[i].images.slice(1);
      }

      this.persons = data.persons;


    });
  }

  getPrefixed(data: string) {
    return this.prefix + data;
  }

  onImageClick(filePath: string) {
    this.apiService.makeRecognition(filePath).then(data => this.recognizedName = data.person);
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
