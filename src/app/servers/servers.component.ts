import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements  OnInit{

  allowNewServer = false;
  serverCreationStatus = 'No server was created !';
  severName:string = 'TestServer';
  serverCreated = false;
  servers = ['r', 'Testserver 2']

  constructor() {

    setTimeout(()=>{this.allowNewServer = true},2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.severName)
    this.serverCreationStatus = 'Server was created !' + this.severName;
  }


  onUpdateServerName(event :Event) {
         this.severName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }
}
