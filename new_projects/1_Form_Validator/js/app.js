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

function showSuccess(input) {
    // console.log(input.value);
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//Check email validity
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // it will return true if email matches the re convention or else will return false 
    return re.test(String(email).toLowerCase());
}

// Event listener
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('Submitted');
    // console.log(username.value);

    if (username.value === '') {
        showError(username, 'Username is required!');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required!');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Not a valid email');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required!');
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Confirm password is required!');
    } else {
        showSuccess(password);
    }

    if (password != password2) {
        showError('Password did not match!');
    } else {
        showSuccess('Passwords matched!');
    }
});

var name = "yes"

console.log(name)