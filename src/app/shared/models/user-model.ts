import {Team} from './team-model';

export enum UserStatus {
  Active,
  Dissmiss
}

export enum UserPosition {
  'Admin',
  'Team Leader',
  'Account Manager'
}

export class User {
  id: string;
  position: UserPosition;
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
