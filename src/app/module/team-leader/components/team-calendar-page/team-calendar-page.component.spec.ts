import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCalendarPageComponent } from './team-calendar-page.component';

describe('TeamCalendarComponent', () => {
  let component: TeamCalendarPageComponent;
  let fixture: ComponentFixture<TeamCalendarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCalendarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCalendarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
