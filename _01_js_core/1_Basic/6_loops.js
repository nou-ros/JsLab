// for loop
for (var i=0; i<10; i++)
{
    console.log(i);
}

var values = ['Max', 'Tim', 1837, 'developer', false];
var i=0;
for(;i<values.length;i++)
{
    console.log(values[i]);
}

// While
var j = 0;
while(j<values.length)
{
    console.log(values[j]);
    j++;
}

//Continue and break
values = ['Max', 'Tim', 1837, 'developer', false];
for(var p=0; p<values.length; p++)
{
    if(typeof values[p] !== 'string') continue;
    console.log(values[p]);
}

values = ['Max', 'Tim', 1837, 'developer', false];
for(var q=0; q<values.length; q++)
{
    if(typeof values[q] !== 'string') break;
    console.log(values[q]);
}

// backward looping
for (var t = values.length-1; t>=0;t--)
{
    console.log(values[t]);
}