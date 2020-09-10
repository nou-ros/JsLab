
// ES5
var name5 = 'Jane Smith'; // function scoped
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6 let & const - block scoped
const name6 = 'Jane Smith';
let age6 = 23; // can change
// name6 = 'Jane Miller'; //can't change value 
console.log(name6);

// // ES5
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true);

// ES6
function driversLicence6(passedTest) {
    
    // console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);

// ES5
var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// ES6
let j = 23;
for (let j = 0; j < 5; j++) {
    console.log(j);
}
console.log(j);

