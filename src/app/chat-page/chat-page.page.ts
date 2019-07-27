import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.page.html',
  styleUrls: ['./chat-page.page.scss'],
})
export class ChatPagePage implements OnInit {

  constructor(private route: ActivatedRoute) {
    // console.log(this.route.snapshot.paramMap.get('userId'));
   }

  ngOnInit() {
    const socket = io('http://localhost:3000')
    // socket.onasd()
  }

}
