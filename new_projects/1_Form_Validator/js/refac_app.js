const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    // selecting parentElement of input item which is form-control here
    const formControl = input.parentElement;
    formControl.className = 'form-control danger';

    // to select the specific input small tag
    const small = formControl.querySelector('small');
    //to pass the message in the html
    small.innerText = message;

}

//show success
function showSuccess(input) {
    // console.log(input.value);
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//Check email validity
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // it will return true if email matches the re convention or else will return false 
    if(re.test(input.value.trim()))
    {
        showSuccess(input);
    }
    else{
        showError(input, 'Please insert a valid email!')
    }
}



// Checking required fields
function checkRequired(inputArr)
{
    // for(let input=0; input<inputArr.length; input++)
    // {
    //     console.log(inputArr[input]);
    // }

    //same as above
    inputArr.forEach(function(input){
        // console.log(input.value);

        // trim is used to nullify all the whitespaces
        if(input.value.trim() === '')
        {
            // console.log(input.id);
            showError(input, `${getFieldName(input)} is required!`);
        }
        else
        {
            showSuccess(input);
        }
    })
}

//getFieldName
function getFieldName(input)
{
    firstChar = input.id.charAt(0).toUpperCase();
    restChars = input.id.slice(1);
    return firstChar+restChars;
}


// check input length
function checkLength(input, min, max)
{
    if(input.value.length < min) 
    {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if(input.value.length > max)
    {
        showError(input, `${getFieldName(input)} can't be greater than ${max} characters`);
    }
    else 
    {
        showSuccess(input);
    }
}


// check passwords match
function checkPasswordsMatch(input1, input2)
{
    if(input1.value != input2.value)
    {
        showError(input2, "Password do not match!")
    }
}


// Event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('Submitted');
    // console.log(username.value);

    // to check all required fields by sending them in an array
    checkRequired([username, email, password, password2]);

    // to ensure username length is equal to 3 or more
    checkLength(username, 3, 20);
    // to ensure password length is equal to 8 or more
    checkLength(password, 8, 25);

    // to ensure valid email is passed
    checkEmail(email);

    //Match password
    checkPasswordsMatch(password, password2);
});