// .bind() when we want the function to later be called with a certain context, useful in events. Use .call() or .apply() when we want to invoke the function immediately, with 'this' and modify the context.

var max = {
    name: 'Max',
    age: 28,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style==='formal')
        {
            console.log('Good ' + timeOfDay + ', Ladies and gentleman! I \'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }else if(style === 'friendly')
        {
            console.log('Hey, ' + timeOfDay + '!'+' I\'m ' + this.name + ' a ' + this.job + ', who is ' + this.age + ' years old.');
        }
    }
}

max.presentation('formal', 'morning');

var tim={
    name: 'Tim',
    age: 26,
    job: 'developer'
}

// Call
max.presentation.call(tim, 'friendly', 'afternoon');
// Apply - no work here as the function does not accept array here
// max.presentation.apply(tim, ['friendly', 'afternoon']);

// Bind
var maxFriendly = max.presentation.bind(max, 'friendly');

maxFriendly('evening');
maxFriendly('night');

var timFormal = max.presentation.bind(tim, 'formal');
timFormal('noon');


var years = [1990, 1965, 1937, 2005, 1998];
function arrCalc(arr, fn){
    var res = [];
    for(var i=0;i<arr.length;i++){
        res.push(fn(arr[i]));
    }
    return res;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrCalc(years, calculateAge);

// presetting argument - limit
var fullJapan = arrCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);



