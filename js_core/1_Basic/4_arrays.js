// Initialize array
var names = ['Max', 'Tom', 'Tim', 'Gon'];
var years = new Array(1990, 1969, 1985);

console.log(years[2]);

// Mutate array
names[1] = 'Ben';
names[names.length] = 'Gin';
console.log(names);

// Various data types
var various = ['Ron', 'Won', 1989, false];

various.push('blue');
various.unshift('Mr.');
console.log(various);

various.pop();
various.shift();
console.log(various);

console.log(various.indexOf(false));

console.log(various.indexOf('ny') === -1 ? 'Ny is not a designer':'Ny is a designer.');