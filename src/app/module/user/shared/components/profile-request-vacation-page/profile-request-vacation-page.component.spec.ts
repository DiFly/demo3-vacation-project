import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRequestVacationPageComponent } from './profile-request-vacation-page.component';

describe('ProfileRequestVacationPageComponent', () => {
  let component: ProfileRequestVacationPageComponent;
  let fixture: ComponentFixture<ProfileRequestVacationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileRequestVacationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRequestVacationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
