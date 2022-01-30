// functions
var now = 2020;
function age(birthYear)
{
    return now-birthYear;
}

var tomAge = age(1995);
console.log(tomAge);

function retirement(year, name)
{
    var maxAge = age(year);
    var retirement = 65 - maxAge;
    if(retirement>0)
    {
        console.log(name + ' retires in ' + retirement + ' years.');
    }
    else
    {
        console.log('Already retired!');
    }
    
}

retirement(1955,'Max');

var profession = function(job, name){
    switch(job)
    {
        case 'teacher':
            return name + ' is a teacher.';
        case 'developer':
            return name + ' is a developer.';
        case 'designer':
            return name + ' is a designer.';
        
        default:
            return 'Not imployed!';
    }
}

console.log(profession('', 'Tim'));