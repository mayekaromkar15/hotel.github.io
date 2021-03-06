import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagezoomer',
  templateUrl: './imagezoomer.component.html',
  styleUrls: ['./imagezoomer.component.css'],
})
export class ImagezoomerComponent implements OnInit {
  images: any;
  backImage: any;
  dummyImages: any;
  constructor() {}

  ngOnInit(): void {
    this.images = ['1', '2', '3', '4', '5'].map(
      (n) => `../../../assets/images/IZ${n}.jpeg`
    );
  }
}
