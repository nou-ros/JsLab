// Object.create 

var personProto = {
    calculateAge: function(){
        console.log(2020-this.year);
    }
};

// first way - create empty object then provide values
var tim = Object.create(personProto);

tim.name = 'Tim';
tim.year = 1980;
tim.job = 'developer';

// second way - create with default value
var max = Object.create(personProto, {
    name: { value: 'Max' },
    year: { value: 1990 },
    job: { value: 'Tester' }
});

