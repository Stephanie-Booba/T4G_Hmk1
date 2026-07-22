let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let email = prompt("Enter your email:");

//alert(`Hi ${name}, your are ${age} years old and we'll keep in touch via your email: ${email}`;


if (age < 12) {
    alert(`Hi ${name}, you are ${age} years old and you are too young to register. Sorry`);
} else if (age >= 12 && age < 18) {
    alert(`Hi ${name}, you are ${age} years old and you have limited options to register for. We will keep in touch via your email: ${email}.`);
} else {
    alert(`Hi ${name}, you are ${age} years old and you can register for any option of your choosing. We will keep in touch via your email: ${email}.`);
}




//console.log("Hello, JavaScript is connected!");

let myName = "Miss Booba";
console.log(myName);

let myAge = 29;
console.log(myAge);

let addition = 15 + 10;
console.log(addition);

let subtraction = 20 - 8;
console.log(subtraction);

let division = 24 / 6;
console.log(division);

let multiplication = 7 * 5;
console.log(multiplication);

let remainder = 15 % 4;
console.log(remainder);

let isStudent = true;
console.log(isStudent);

let score = 200
console.log(typeof score);

let school = "Tech4Girls"
console.log(typeof school);




