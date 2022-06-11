import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPartenerComponent } from './our-partener.component';

describe('OurPartenerComponent', () => {
  let component: OurPartenerComponent;
  let fixture: ComponentFixture<OurPartenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurPartenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPartenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
