import {Team} from './team-model';

export enum UserStatus {
  Active,
  Dissmiss
}

export class User {
  id: string;
  firstname: string;
  surname: string;
  userpic?: string;
  emailself: string;
  emailwork: string;
  phone: string;
  skype: string;
  datestart: Date;
  status: UserStatus;
  dateend?: Date;
  team?: Team;

  daysavailable?: number;
}
