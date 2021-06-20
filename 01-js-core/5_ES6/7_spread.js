// rest parameter collects items into an array, the spread operator the opposite to rest parameter, where it unpacks the collected elements into single elements

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}
// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// //ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(this, ages);
// console.log(sum2);

// //ES6
var ages = [18, 30, 12, 21];
const sum3 = addFourAges(...ages);
console.log(sum3);
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');