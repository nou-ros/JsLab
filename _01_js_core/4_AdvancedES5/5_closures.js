/* closer - An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.
 */

 // Example - 1 
function retirement(retireAge) {
  var a = " years left until retirement.";
  return function (birthYear) {
    var age = 2020 - birthYear;
    console.log(retireAge - age + a);
  };
}

var retirementUS = retirement(66);

var retirementBD = retirement(65);

var retirementIceLand = retirement(67);

retirementUS(1990);
retirementBD(1990);
retirementIceLand(1990);


 // Example - 2

function interviewQuery(job) {
  return function (name) {
    if (job === "developer") {
      console.log(name + ", can you tell us what is an object?");
    } else if (job === "designer") {
      console.log(name + ", can you explain what UX design is?");
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  };
}

interviewQuery("designer")("Gin");
