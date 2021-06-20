// Objects and properties
// new object syntax
var gon = new Object();
gon.name = 'Gon Freecss';
gon.year = 16;
gon.job = 'Hunter';

console.log(gon);

var now = 2020;
var sg = {
    firstName: 'Sakata',
    lastName: 'Gintoki',
    birthYear: 1988,
    family: ['Kagura', 'Shinpachi', 'Sadaharu'],
    job: 'Odd job owner',
    isMarried: false,
    calcAge: function() 
    {
        // return now - this.birthYear;
        this.age = now - this.birthYear;
    }
}

console.log(sg);
console.log(sg['firstName']);
var x = 'birthYear';
console.log(sg[x]);

sg.job = 'Samurai';

// console.log(sg.calcAge());

console.log(sg);