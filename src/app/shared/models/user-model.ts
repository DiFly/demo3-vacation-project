import {Team} from './team-model';

export enum UserStatus {
  Active,
  Dismiss
}

export enum UserPosition {
  Admin,
  TeamLeader,
  AccountManager
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
  birthday?: Date;
  datestart: Date;
  status: UserStatus;
  dateend?: Date;
  team?: Team;

  daysavailable?: number;
}
