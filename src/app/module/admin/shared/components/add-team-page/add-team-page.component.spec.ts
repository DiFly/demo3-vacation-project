import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamPageComponent } from './add-team-page.component';

describe('AddTeamPageComponent', () => {
  let component: AddTeamPageComponent;
  let fixture: ComponentFixture<AddTeamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
