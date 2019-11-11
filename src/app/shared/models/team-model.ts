import {EmployeeModel} from './employee-model';

export class TeamModel {
  id?: string;
  name: string;
  teamLeadId: string;
  deleted: boolean;
  teamLeadName: string;
  employeeCount?: number;
  employees?: EmployeeModel[];
}
