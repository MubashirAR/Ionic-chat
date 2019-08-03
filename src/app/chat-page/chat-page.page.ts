import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.page.html',
  styleUrls: ['./chat-page.page.scss'],
})
export class ChatPagePage implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.paramMap.get('userId'));
   }

  ngOnInit() {}

}
