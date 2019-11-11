import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import {switchMap, tap} from 'rxjs/operators';

import {EmployeeModel} from '../../../../../shared/models/employee-model';
import {EmployeeService} from '../../../../../shared/services/employee.service';
import {TeamModel} from '../../../../../shared/models/team-model';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss']
})
export class EditProfilePageComponent implements OnInit, OnDestroy {
  user: EmployeeModel;
  editForm: FormGroup;

  users: EmployeeModel[];
  teams: TeamModel[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private userService: EmployeeService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      tap(params => console.log(params)),
      switchMap((params: ParamMap) => {
        if (params === null) {
          this.location.back();
        } else {
          return this.userService.getEmployeeById(params.get('id'));
        }
      }),
    ).subscribe(params => {
      console.log('after subscribe ', params);
    });

    this.editForm = new FormGroup({
      vacationType: new FormControl(),
    });
    this.editForm.controls.vacationType.setValue('0', {onlySelf: true});

  }

  cancel() {
    this.editForm.reset();
    this.location.back();
  }

  sendRequestVacation() {
    alert('Click button SAVE CHANGES');
  }

  ngOnDestroy(): void { }
}
