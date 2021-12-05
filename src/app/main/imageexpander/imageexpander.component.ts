import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageexpander',
  templateUrl: './imageexpander.component.html',
  styleUrls: ['./imageexpander.component.css'],
})
export class ImageexpanderComponent implements OnInit {
  images: any;

  constructor() {}

  ngOnInit(): void {
    this.images = ['1', '2', '3', '4', '5'].map(
      (n) => `../../../assets/images/IZ${n}.jpeg`
    );
  }
}
