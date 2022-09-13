'use strict';

function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function() {
        console.log(`name of user: ${this.name}, age of user: ${this.age}`);
    }
}

const john = new User('John', 30);
console.log(john.name);
console.log(john.age);

john.age = 35;
john.name = 'Ken';

john.say();

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`name of user: ${this.name}, age of user: ${userAge}`);
    }

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('invalid value');
        }

    };
}

const john = new User('John', 30);
console.log(john.name);
console.log(john.userAge);
console.log(john.getAge());

john.setAge(35);
john.setAge(350);
john.name = 'Ken';
console.log(john.getAge());

john.say();


class User {

    constructor(name, age) {
        this.name = name;
        this.userAge = age;        
    }

    say() {
        console.log(`name of user: ${this.name}, age of user: ${this.userAge}`);
    }

    getAge() {
        return this.userAge;
    }

    setAge(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this.userAge = age;
        } else {
            console.log('invalid value');
        }

    }
}

const john = new User('John', 30);
console.log(john.name);
john.userAge = 99;
console.log(john.getAge());

john.setAge(35);
john.setAge(350);
john.name = 'Ken';
console.log(john.getAge());

john.say();


//---------------


class User {

    constructor(name, age) {
        this.name = name;
        this._age = age;        
    }
    #surname = 'Long';
    say() {
        console.log(`name of user: ${this.name} ${this.#surname}, age of user: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('invalid value');
        }

    }

    get surname() {
        return this.#surname;
    }

    set surname(str) {
        this.#surname = str;
    }
}






const john = new User('John', 30);
console.log(john.age);
john.age = 99;
console.log(john.age);
john.say();

console.log(john.surname); //undefined without get/set surname
john.surname = 'Short';
console.log(john.surname);