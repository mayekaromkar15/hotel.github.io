import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicformpackageComponent } from './dynamicformpackage.component';

describe('DynamicformpackageComponent', () => {
  let component: DynamicformpackageComponent;
  let fixture: ComponentFixture<DynamicformpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicformpackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicformpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
