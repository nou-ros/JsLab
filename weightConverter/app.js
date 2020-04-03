let lbsInput = document.getElementById('lbsInput');
lbsInput.addEventListener('input', lbsFunction);
const output = document.getElementById('output');
output.style.visibility='hidden';

function lbsFunction(e)
{
    output.style.visibility='visible';
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML=lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML=lbs/2.2046;
    document.getElementById('ozOutput').innerHTML=lbs*16;

}