export enum VacationStatus {
  Approve,
  Refuse,
  Unconfirmed
}

export class Vacation {
  id: string;
  idUser: string;
  datestart: Date;
  dateend: Date;
  comment: string;
  description?: any;
  status: VacationStatus;
}
