import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVacationRequestsPageComponent } from './list-vacation-requests-page.component';

describe('ListVacationRequestsComponent', () => {
  let component: ListVacationRequestsPageComponent;
  let fixture: ComponentFixture<ListVacationRequestsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVacationRequestsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVacationRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
