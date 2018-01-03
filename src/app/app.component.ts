import { Component } from '@angular/core';
import {ChatService} from "./services/chat.service";
//import 'bootstrap';
//import 'jquery.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [ChatService]
})
export class AppComponent  {

}
