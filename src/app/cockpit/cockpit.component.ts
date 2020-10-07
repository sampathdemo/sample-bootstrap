import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  @Output('srCreated') serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  //newServerName = '';
  newServerContent='';

  ngOnInit(): void {
  }


  onAddServer(serverNameInput: HTMLInputElement){
    this.serverCreated.emit({
        serverName: serverNameInput.value,
        serverContent: this.newServerContent
      });
   }
    onAddBlueprint(serverNameInput: HTMLInputElement){
      this.blueprintCreated.emit({
        serverName: serverNameInput.value,
        serverContent: this.newServerContent
      });

  }
}

