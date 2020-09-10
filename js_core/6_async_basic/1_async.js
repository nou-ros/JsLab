
const second = () => {
    console.log('second');
    setTimeout(() =>{
        console.log('Async second.')
    }, 2000);
}


const first = () => {
    console.log('first');
    second();
    console.log('The end');
}

first();