import {User} from './user-model';

export class Team {
  id: string;
  name: string;
  leader: User;
  members?: User[];
}
