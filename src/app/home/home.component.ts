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

  imageData: any;

  constructor(private apiService: ApiService, private sanitizer: Sanitizer) {
    this.apiService.getPictures()
      .subscribe(data => {
        console.log(data);
        this.imageData = 'data:image/png;base64,' + data;
      });
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
