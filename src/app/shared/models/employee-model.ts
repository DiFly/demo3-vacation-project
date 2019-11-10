import {TeamModel} from './team-model';

export interface EmployeeModel {
  id?: string;
  firstName: string;
  surname: string;
  avatar?: string;
  birthdate: Date;
  jobTitle: string;
  workEmail: string;
  email: string;
  phone: string;
  skype: string;
  workStartDate: Date;
  isActive: boolean;
  workEndDate?: Date;
  deleted: boolean;
  balance: number;
  teamId?: string;
  teams?: TeamModel[];
}
