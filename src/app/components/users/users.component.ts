import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  // Properties
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  // Methods
  constructor() { }

  ngOnInit() {

    this.users = [
      {
        firstName: 'Ben',
        lastName: 'Reckas',
        age: 65,
        address: {
          street: '50 Main Street',
          city: 'Clovis',
          state: 'CA'
        },
        isActive: true,
        registered: new Date('01/01/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 23,
        address: {
          street: '20 Awesome Street',
          city: 'Fresno',
          state: 'CA'
        },
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Jane',
        lastName: 'Bojangles',
        age: 28,
        address: {
          street: '66 Candy Street',
          city: 'Coalinga',
          state: 'CA'
        },
        isActive: false,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }

}
