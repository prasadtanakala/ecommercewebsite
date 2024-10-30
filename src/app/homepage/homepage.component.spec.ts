import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CommonService } from '../common.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageComponent],
      imports:[HttpClientTestingModule],
      providers:[CommonService ,{provide: ActivatedRoute ,useValue: {
        queryParams: of(convertToParamMap({ 
          search: ""         
        }))
      }}],
      schemas:[NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
