import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Server',content:'this is Red Server'},
                    {type:'blueprint',name:'Server',content:'this is Blue Server'}];
  title = 'sample-bootstrap';


}
