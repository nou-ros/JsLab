//  IF ELSE 
var age = 25;
var status = 'youth';

if (status === 'old')
{
    console.log(age + ' is old!');
}
else 
{
    console.log(age + ' is young.');
}

var massLeo = 89; //kg
var heightLeo = 1.7 //meters

var massTim, heightTim;
massTim = 68;
heightTim = 1.65;

var BMILeo = massLeo/(heightLeo*heightLeo);
var BMITim = massTim/(heightTim*heightTim);

if (BMILeo > BMITim)
{
    console.log("Leo's BMI: " + BMILeo);
}
else 
{
    console.log("Tim's BMI: " +BMITim);
}

//boolean Logic
var age = 18;

if(age<15)
{
    console.log('Teen');
}
else if (age >= 15 && age <= 25)
{
    console.log('Youth');
}
else if (age > 25 && age <= 50)
{
    console.log('Man');
}
else 
{
    console.log('old');
}

// ternary 
age >= 18?console.log(' loves biriyani.'):console.log(' loves ice-cream.');

var drink = age >= 19 ? 'beer':'juice';
console.log(drink);

// Switch
/*
var job = prompt('Enter your profession: ');

switch(job){
    case 'teacher':
        console.log('You are a ' + job);
        break;
    case 'developer':
        console.log('You are a ' + job);
        break;
    case 'gamer':
        console.log('You are a ' + job);
        break;
    case 'designer':
        console.log('You are a ' + job);
        break;

    default:
        console.log('You are unemployed!');

}
*/

// Truthy and falsy values and equality operators

//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

var myValue=15;
// myValue = '';
if(myValue || myValue === 0){
    console.log('Variable defined.');
}
else {
    console.log('Variable not defined.');
}

//Equality operators
if(myValue == '15') // string will be converted to number
{
    console.log('The == operator does type coercion.');
}
if(myValue === 15)
{
    console.log('this is strict equal operator.');
}
