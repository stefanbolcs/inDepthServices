
//a service is just a normal TypeScript class
export class LoggingService {
logStatusChange(status: string){
    console.log('Ammm server status changed, new status: ' + status);
}
}