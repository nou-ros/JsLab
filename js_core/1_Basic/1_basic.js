// Variables and data types
/*
var firstName = 'john';

var age = 20;
var youth = true;
// console.log(age, youth);

var job;
console.log(job);

job='Teacher';
console.log(job);

//Type coertion

console.log(firstName + ' ' + age);

var isMarried, hasSibling;
isMarried = false;
hasSibling = '3 borthers and 1 sister';

console.log(firstName + ' is a '+ age + ' year old ' + job + '. Has ' + hasSibling + '. Is he married? ' + isMarried) ;


//Variable mutation
age = 'twenty';
job = 'developer';

alert(firstName + ' is a '+ age + ' year old ' + job + '. Has ' + hasSibling + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

// Math operators
var year, johnYear, tomYear, ageJohn, ageTom;
year = 2020;
ageJohn = 20;
ageTom = 27;

johnBirth = year - ageJohn;
tomBirth = year - ageTom;

console.log(johnYear);
console.log(year + 2);
console.log(year * 2);
console.log(year / 5);

// Logical operators
var older = ageJohn<ageTom;
console.log(older);

//type of operator
console.log(typeof older);
console.log(typeof year);
console.log(typeof 'hello world');
var x;
console.log(typeof x);

// Operator precedence
var fullAge = year - johnBirth >= ageJohn;
console.log(fullAge);

var avg = (ageJohn + ageTom)/2;
console.log(avg);

var x,y;
x = y = (3+5)*(4-2);
console.log(x,y);

x *= 2;
y += 10;
x ++;
y--;
console.log(x,y);