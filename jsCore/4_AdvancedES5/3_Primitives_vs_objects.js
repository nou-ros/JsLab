// premitives
var a = 23;
var b = a;
a = 45;
console.log(a,b);

// objects
var obj1 = {
    name: 'Rok',
    age: 23
};
var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);


// functions    
var swords = 3;
var obj = {
    name: 'Zoro',
    city: 'Wano'
}

function change(a,b){
    a = 2;
    b.city = 'dressrosa';
}

change(swords, obj);

console.log(swords);
console.log(obj.city);