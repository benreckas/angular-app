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
  currentClass = {};

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
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true
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
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false
      },
      {
        firstName: 'James',
        lastName: 'Bojangles',
        age: 28,
        address: {
          street: '66 Candy Street',
          city: 'Coalinga',
          state: 'CA'
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true
      }
    ];

    // this.addUser({
    //   firstName: 'Norma',
    //   lastName: 'Reckas'
    // });

    this.loaded = true;

    this.setCurrentClasses();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClass = {
      'btn-success': this.enableAdd
    }
  }

}
