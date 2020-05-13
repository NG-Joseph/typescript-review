"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
//Accessing object properties
/*let firstName = "Pius";
let lastName = "Onobhayedo";
let gender = "male";
let height = 1.7;
let hobbies = ['Tennis','Programming'];
let birthday = new Date(1900,4,5);
let isAlive = true;
let person1 = new Person(firstName, lastName, gender, height,
 hobbies, birthday, isAlive)
log(`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is $ {person1.birthday.toLocaleDateString()}`); */
const tools_2 = require("./tools");
var Gender;
(function (Gender) {
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["male"] = 2] = "male";
})(Gender || (Gender = {}));
let person1Data = {
    firstName: "pius",
    lastName: "onobhayedo",
    gender: Gender.male,
    height: "1.5",
    hobbies: [],
    birthday: new Date(1900, 10, 10),
    isAlive: true
};
let person2Data = {
    firstName: "Mary",
    lastName: "Joseph",
    gender: Gender.female,
    hobbies: ['Work', 'Pray', 'Play'],
    isAlive: true
};
let person1 = new tools_2.Person(person1Data);
let person2 = new tools_2.Person(person2Data);
tools_1.log(`Person 1 is ${person1.height} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`);
tools_1.log(`Person 1 is ${person1.getFullName()} whose height is ${person1.height}and birthday is ${person1.birthday.toLocaleDateString()} and hobbies are ${person1.hobbies.length == 0 ? 'not yet set' : person1.hobbies}. <br/>
Person 2 is ${person2.getFullName()} whose height is ${person2.height} and hobbies are ${person2.hobbies.length == 0 ? 'not yet set' : person2.hobbies}`);
//# sourceMappingURL=index.js.map