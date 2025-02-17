import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPageComponent } from './view-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ViewPageComponent', () => {
  let component: ViewPageComponent;
  let fixture: ComponentFixture<ViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPageComponent],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
