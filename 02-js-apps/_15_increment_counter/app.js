const counters = document.querySelectorAll('.counter');


counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        // with + we change the type of target to a Number type object from string.
        const target = +counter.getAttribute('data-target');
        // console.log(target);
        const c = +counter.innerText;

        const increment = target / 300;

        // console.log(increment);

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
    }

    updateCounter();
})