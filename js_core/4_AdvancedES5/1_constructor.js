// Function constructor

var Person = function(name, year, job){
    this.name = name;
    this.year = year;
    this.job = job;
}

var max = new Person('Max', 1990, 'developer');


// All the methods and properties that we want to inherited by other classes/contstructor should be in prototype property.
//method
Person.prototype.calculateAge =  function() {
    console.log(2020-this.year);
}
// property
Person.prototype.lastName = 'Smith';

max.calculateAge();
console.log(max.lastName);


