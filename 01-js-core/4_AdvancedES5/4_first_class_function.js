///////////////////////////////
// Function passing function

var years = [1990, 1965, 1987, 2005, 1998];

function arrCalc(arr, fn){
    var arrRes = [];
    for(var i=0; i<arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function CalcAge(el){
    return 2020 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if (el>=18 && el <= 81)
    {
        return Math.round(206.9 - (0.67 * el));
    }
   else
   {
       return -1;
   }
}

var ages = arrCalc(years, CalcAge);
var fullAges = arrCalc(ages, isFullAge);

console.log(ages);
console.log(fullAges);

var rates = arrCalc(ages, maxHeartRate);
console.log(rates); 

///////////////
// Function returning function

function interviewQuery(job){
    if(job === 'developer')
    {
        return function(name){
            console.log(name + ', can you tell us what is an object?');
        }
    }
    else if (job === 'designer')
    {
        return function(name){
            console.log(name + ', can you explain what UX design is?');
        }
    }
    else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var question_design = interviewQuery('designer');
var question_devloper = interviewQuery('developer');

question_design('Tim');
question_devloper('Max');

// another way
interviewQuery('developer')('Bob');
interviewQuery('tester')('Gin');

// ////////////////////
// IIFE - Immediately invoked function expression
(function (){
    var score = Math.random() * 10;
    console.log(score);
    console.log(score >= 5);
})();

(function (value){
    var score = Math.random() * 10;
    console.log(score);
    console.log(score >= 5);
    console.log(value);
})(5);
