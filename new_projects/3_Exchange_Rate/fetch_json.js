// demo for fetch also demo of json is items.json

function calculate() {
    //get request

    fetch('items.json').then((res) =>
            // console.log(res);
            // it returns a res.json so we get another promise
            res.json()
        )
        // this will give us the data
        .then(data =>
            // console.log(data)
            (document.body.innerHTML = data[0].text)
        );
}


calculate();