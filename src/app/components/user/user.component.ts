import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // Properties
  firstName: string;
  lastName: string;
  age: number;
  address;


  foo: any;
  hasKids: boolean;
  numberArr: number[];
  stringArr: string[];
  mixedArr: any[];
  myTuple: [string, number, boolean];

  // Methods
  constructor() {
    this.firstName = 'Ben';
    this.lastName = 'Reckas';
    this.age = 28;
    this.address = {
      street: '50 Main Street',
      city: 'Clovis',
      state: 'CA' 
    };
    this.numberArr = [1, 2, 3];
    this.stringArr = ['banana', 'apple'];
    this.mixedArr = ['banana', 'apple', 1, 2, true, undefined];
    this.myTuple = ['ben', 28, false];

    console.log(this.addNums(2, 3));
  }

  showAge() {
    return this.age + 2;
  }

  addNums(num1: number , num2: number): number {
    return num1 + num2;
  }
}
