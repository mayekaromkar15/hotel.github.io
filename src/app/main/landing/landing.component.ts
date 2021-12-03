import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  images: any;
  backImage: any;
  dummyImages: any;
  constructor() { }

  ngOnInit(): void {

    this.images = ['a', 'b', 'c', 'd'].map((n) => `../../../assets/images/${n}.jpeg`);
    this.dummyImages = ['a', 'b', 'c', 'd'].map((n) => `background-image: url(../../../assets/images/${n}.jpeg)`);
  }

}
