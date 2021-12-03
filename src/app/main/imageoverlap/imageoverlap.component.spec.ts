import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageoverlapComponent } from './imageoverlap.component';

describe('ImageoverlapComponent', () => {
  let component: ImageoverlapComponent;
  let fixture: ComponentFixture<ImageoverlapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageoverlapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageoverlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
