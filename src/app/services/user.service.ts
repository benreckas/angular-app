import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/User';

@Injectable()
export class UserService {
  //Properties
  users: User[];
  data: Observable<any>;

  // Methods
  constructor() { 
    this.users = [
      {
        firstName: 'Ben',
        lastName: 'Reckas',
        email: 'ben@gmail.com',
        isActive: true,
        registered: new Date('01/01/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@gmail.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Jane',
        lastName: 'Bojangles',
        email: 'jane@gmail.com',
        isActive: false,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;

  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

}
