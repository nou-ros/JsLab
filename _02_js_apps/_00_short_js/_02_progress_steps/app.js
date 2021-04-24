const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

//next button functionality
next.addEventListener('click', () => {
    // console.log('next clicked');
    currentActive++;

    // console.log(currentActive);
    // console.log(circles.length);
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    

    update();
})

//previous button funtionality
prev.addEventListener('click', () => {
    // console.log('next clicked');
    currentActive--;
    // console.log(currentActive);

    if(currentActive < 1){
        currentActive = 1;
    }
    // console.log(currentActive);

    update();
})

function update(){
    circles.forEach((circle, index) => {
        if(index<currentActive){
            // console.log(index);
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    // console.log(actives.length/circles.length);
    progress.style.width = ((actives.length-1)/(circles.length-1) * 100) + '%';
    
    if(currentActive === 1)
    {
        prev.disabled=true;
    }
    else if(currentActive === circles.length)
    {
        next.disabled=true;
    }
    else{
        next.disabled=false;
        prev.disabled=false;
    }
}