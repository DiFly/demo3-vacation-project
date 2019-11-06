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
  id: number;
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


  daysavailable?: number;
}
