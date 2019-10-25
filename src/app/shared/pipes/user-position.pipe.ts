import {Pipe, PipeTransform} from '@angular/core';
import {UserPosition} from '../models/user-model';

@Pipe({
  name: 'userPosition'
})
export class UserPositionPipe implements PipeTransform {

  transform(value: UserPosition, ...args: any[]): string {
    switch (value) {
      case UserPosition.AccountManager:
        return 'Account Manager';
      case UserPosition.TeamLeader:
        return 'Team Leader';
      case UserPosition.Admin:
        return 'Admin';
      default:
        return 'Not found position';
    }
  }

}
