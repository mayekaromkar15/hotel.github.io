import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagezoomerComponent } from './imagezoomer.component';

describe('ImagezoomerComponent', () => {
  let component: ImagezoomerComponent;
  let fixture: ComponentFixture<ImagezoomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagezoomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagezoomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
