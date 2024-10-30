import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPageComponent } from './detailed-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DetailedPageComponent', () => {
  let component: DetailedPageComponent;
  let fixture: ComponentFixture<DetailedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedPageComponent],
      schemas:[NO_ERRORS_SCHEMA],
      
    });
    fixture = TestBed.createComponent(DetailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
