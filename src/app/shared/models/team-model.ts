import {EmployeeModel} from './employee-model';

export class TeamModel {
  id: string;
  name: string;
  teamLeadId: string;
  deleted: boolean;
  nullable: true;
  teamLeadName: string;
  employeeCount: number;
  employees?: EmployeeModel[];
}
