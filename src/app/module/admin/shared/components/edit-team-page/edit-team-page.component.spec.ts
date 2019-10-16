import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamPageComponent } from './edit-team-page.component';

describe('EditTeamPageComponent', () => {
  let component: EditTeamPageComponent;
  let fixture: ComponentFixture<EditTeamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTeamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
