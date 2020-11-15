import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';


//says that something can be injected here!
@Injectable()
export class AccountsService {
    //arrays are a reference type in javascript
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private loggingService: LoggingService){}

      addAccount(name:string, status:string){
            this.accounts.push({name:name, status: status});
            this.loggingService.logStatusChange(status);
      }

      updateStatus(id:number, status:string){
            this.accounts[id].status = status;
            this.loggingService.logStatusChange(status);
      }
}