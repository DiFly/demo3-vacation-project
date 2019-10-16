import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeamPageComponent } from './list-team-page.component';

describe('ListTeamPageComponent', () => {
  let component: ListTeamPageComponent;
  let fixture: ComponentFixture<ListTeamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTeamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
