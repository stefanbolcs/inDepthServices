import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LoggingService]
})
//                ^^^^^^^
//so this is how the loggingService is centralized
export class NewAccountComponent {  

  //it means constructor(private loggingService:LoggingService, private accountsService:AccountsService){}
  //two instances of services, google hierarchycal injektor
  constructor(private loggingService:LoggingService, private accountsService:AccountsService){
    this.accountsService.statusUpdated.subscribe(
      (status:string)=> alert("new status: "+status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange( accountStatus);
  }
}
