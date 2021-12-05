import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageexpanderComponent } from './imageexpander.component';

describe('ImageexpanderComponent', () => {
  let component: ImageexpanderComponent;
  let fixture: ComponentFixture<ImageexpanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageexpanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageexpanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
