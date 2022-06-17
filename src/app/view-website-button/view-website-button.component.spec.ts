import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWebsiteButtonComponent } from './view-website-button.component';

describe('ViewWebsiteButtonComponent', () => {
  let component: ViewWebsiteButtonComponent;
  let fixture: ComponentFixture<ViewWebsiteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWebsiteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWebsiteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
