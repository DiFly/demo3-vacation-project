import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeesPageComponent } from './list-employees-page.component';

describe('ListEmployeesPageComponent', () => {
  let component: ListEmployeesPageComponent;
  let fixture: ComponentFixture<ListEmployeesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmployeesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
