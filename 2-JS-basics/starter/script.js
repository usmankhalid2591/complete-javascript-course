/*
    Variable and data types
*/

/*

var firstName = 'John';

console.log(firstName);

var lastName = 'Smith';

var age = 28;

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


//Variable naming rules

var _3years = 3;
var jobnMark = 'John and Mark';

*/

/*
    Variable mutation and type correction
*/

/*

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;

job = 'Teacher';
isMarried = false;

if(isMarried == false){
    isMarried = 'No';
}

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log( firstName + ' ' + lastName);

*/

/* 
    Basic operators
*/

/*


    var year, yearJohn, yearMark;

now = 2018;
ageJohn = 28;
ageMark = 33;


//Math operators

yearJohn = now - ageJohn;

yearMark = now - ageMark;

console.log (yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log (now * 2);
console.log(now / 10);

//Logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than john');
var x;
console.log(typeof x);


*/

/*

    Operator precedence
    
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators

var isFullAge = now - yearJohn >= fullAge; //true

console.log(isFullAge);

//Grouping

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

//Multiple assignments
var x, y;

x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *=2;
console.log(x);

x+=10;
console.log(x);

x = x +1;

x++;

*/

/*
    Coding Challenge
*/

/*
var marksHeight = 5;
var johnsHeight = 6;
var marksMass = 50;
var johnsMass = 70;

var marksBmi = marksMass / (marksHeight * 2);
var johnsBmi = johnsMass / (johnsHeight * 2);

console.log(marksBmi);
console.log(johnsBmi);

var Bmi = marksBmi > johnsBmi;

console.log("Is mark's Bmi greater? " + Bmi);
*/

/*

if(marksBmi > johnsBmi){
    console.log('Marks BMI is greater and is ' + marksBmi);
} else {
    console.log('Johns BMI is greater and is ' + johnsBmi);
}

*/

