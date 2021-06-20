const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// this will increase blurring in every 30 sec
let inter = setInterval(blurring, 30)

function blurring() {
    load++;
    // console.log(load);
    if (load > 99) {
        clearInterval(inter);
    }
    // console.log(load);
    loadText.innerText = `${load}%`;

    // as opacity goes from 1 to 0
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}

// check the scale function here.
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

