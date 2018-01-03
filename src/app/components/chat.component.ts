import { Component, OnInit, OnDestroy } from '@angular/core';
import {ChatService} from "../services/chat.service";

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit, OnDestroy{

  message: string;
  messages: any = [];
  connection: any;
  username: string;
  alart: any = false;

  constructor(private  _chatService: ChatService){

  }

  sendMessage(){
    console.log(this.message);
    console.log(this.username);
    this._chatService.sendMessage(this.message, this.username);
    this.message = '';
  }

  ngOnInit(): void {
    this.connection = this._chatService.getMessages().subscribe(message => {
        console.log(message);
        this.messages.push(message);
    });
  }

  ngOnDestroy(): void {
    this.connection.unsubscribe();
  }

  setUsername(){
    console.log('ChatComponent ' + this.username);
    this._chatService.setUsername(this.username);
    this.alart = 'Username is set';
  }

}
