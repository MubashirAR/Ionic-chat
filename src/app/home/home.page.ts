import { Component } from '@angular/core';
import { SocketService } from '../service/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: String;
  hideInput: boolean;

  contacts = [
    {
      name: 'Joe',
      imgUri: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Doe',
      imgUri: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
  ]
  constructor(private socket: SocketService) {}
  hideInputField() {
    this.hideInput = true;
    this.setOnline(this.username);
  }
  setOnline(username){
    this.socket.online(username);
  }

}
