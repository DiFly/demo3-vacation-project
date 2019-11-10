import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfilePageComponent } from './employee-profile-page.component';

describe('EmployeeProfilePageComponent', () => {
  let component: EmployeeProfilePageComponent;
  let fixture: ComponentFixture<EmployeeProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
