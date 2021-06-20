// 1 variable calling
const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


//3 fetch exchange rates and update the DOM
function calculate() {
    // console.log("ran");

    // 4
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    // console.log(currency_one, currency_two);

    // 5
    fetch(`https://prime.exchangerate-api.com/v5/f1c3b205671d495e9e31f0e2/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const rate = data.conversion_rates[currency_two];

            // console.log(rates);

            // 6
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            // for two decimal value toFixed(2)
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
            // console.log(amountEl_two.value);
        });

}

// 2
//Event listeners
// as value will be changing
currencyEl_one.addEventListener('change', calculate);

// as we will be inputing values
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);


// 7
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;

    calculate();
})
calculate();