export enum VacationStatus {
  Approve,
  Refuse,
  Unconfirmed
}

export class Vacation {
  id: string;
  employeeId: number; // must be string
  startDate: Date; // "2019-10-29T22:56:45.403Z",
  endDate: Date; // "2019-10-29T22:56:45.403Z",
  comment?: string;
  approverComment?: string;
  approverId?: number; // must be string "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  status: VacationStatus; // 0,
  statusChangeDate?: Date; // "2019-10-29T22:56:45.403Z",
  createDateTime: Date; // 2019-10-29T22:56:45.403Z",
  deleted?: boolean; // true,
}
