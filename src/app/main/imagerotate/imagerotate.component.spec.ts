import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagerotateComponent } from './imagerotate.component';

describe('ImagerotateComponent', () => {
  let component: ImagerotateComponent;
  let fixture: ComponentFixture<ImagerotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagerotateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagerotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
