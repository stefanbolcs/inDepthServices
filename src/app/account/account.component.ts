import { AccountsService } from './../accounts.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from './../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})

//so this is how the loggingService is centralized
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  

  ////it means constructor(private loggingService:LoggingService, private accountsService:AccountsService){}
  //two instances of services, google hierarchycal injektor
  constructor(private loggingService:LoggingService, private accountsService:AccountsService){}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
