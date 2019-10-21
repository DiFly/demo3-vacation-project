import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeamProfilePageComponent } from './view-team-profile-page.component';

describe('EditTeamProfilePageComponent', () => {
  let component: ViewTeamProfilePageComponent;
  let fixture: ComponentFixture<ViewTeamProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTeamProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeamProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
