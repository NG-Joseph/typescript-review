import {log} from './tools';

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
import {Person, PersonData} from './tools';
enum Gender{
 female = 1,
 male = 2
}
let person1Data: PersonData = {
 firstName: "pius",
 lastName: "onobhayedo",
 gender: Gender.male,
 height: "1.5",
 hobbies: [],
 birthday: new Date(1900,10,10),
 isAlive: true
}
let person2Data: PersonData = {
 firstName: "Mary",
 lastName: "Joseph",
 gender: Gender.female,
 hobbies: ['Work','Pray','Play'],
 isAlive: true
}
let person1 = new Person(person1Data);
let person2 = new Person(person2Data);
log(`Person 1 is ${person1.height} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()}`);
log(`Person 1 is ${person1.getFullName()} whose height is ${person1.height}and birthday is ${person1.birthday.toLocaleDateString()} and hobbies are ${person1.hobbies.length==0?'not yet set':person1.hobbies}. <br/>
Person 2 is ${person2.getFullName()} whose height is ${person2.height} and hobbies are ${person2.hobbies.length==0?'not yet set':person2.hobbies}`); 
