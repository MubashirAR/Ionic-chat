import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
  constructor() {}

}
