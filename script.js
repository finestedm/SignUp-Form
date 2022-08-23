const password = document.querySelector('#password');
// password.addEventListener('keyup', () => {
//     checkPasswordMatch();
// });
const passwordConfirmation = document.querySelector('#password-confirm');
// passwordConfirmation.addEventListener('keyup', () => {
//     checkPasswordMatch();
// });

const error = document.querySelector('li > p');
error.style.opacity = '0';


function checkPasswordMatch() {
    if ((password.value === passwordConfirmation.value) && (passwordConfirmation.value.length != 0)) {
        error.style.opacity = '0';
        passwordConfirmation.classList.remove('invalid');
        passwordConfirmation.classList.add('valid');
        password.classList.remove('invalid');
        password.classList.add('valid');
        return true
    } else if (passwordConfirmation.value.length === 0) {
        error.style.opacity = '0';
        passwordConfirmation.classList.remove('invalid');
        password.classList.remove('invalid');
        return false

    } else {
        error.style.opacity = '1';
        passwordConfirmation.classList.remove('valid');
        passwordConfirmation.classList.add('invalid');
        password.classList.remove('valid');
        password.classList.add('invalid');
        return false

    }
}

function showPassword() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("password-confirm");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
    } else {
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
    }
}

const inputName = document.getElementById('first-name');
const inputLastName = document.getElementById('last-name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPasswordConf = document.getElementById('password-confirm');


// name input custom validity check

inputName.addEventListener('input', () => {
    if (inputName.value === '') {
        inputName.setCustomValidity('');
        inputLastName.required = false;
    } else if (inputName.value.length < 3) {
        inputName.setCustomValidity('Name must be longer than 2 letters!');
        inputLastName.required = true;
    } else {
        inputName.setCustomValidity('');
        inputLastName.required = true;
    }
});

// Surname input custom validity check

inputLastName.addEventListener('input', () => {
    if (inputLastName.value === '') {
        inputLastName.setCustomValidity('');
        inputName.required = false;
    } else if (inputLastName.value.length < 3) {
        inputLastName.setCustomValidity('Last name must be longer than 2 letters!');
        inputName.required = true;
    } else {
        inputLastName.setCustomValidity('');
        inputName.required = true;
    }
});

// Email input custom validity check

const emailPattern = /^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/;

// Email should start with a alphabet (a-z) and should not start with special characters or numeric values
// after the first letter, it could contains numbers(0-9), letters(a-z), underscores(_) and dot(.)
// it should have only one @ symbol in it
// after the @ symbol, it should only allow to contain alphabets and dot (no more special characters or numbers other than dot(.))
// email should not end with dot(.) but rather end with an alphabet
// it should not have any whitespace anywhere

inputEmail.addEventListener('input', () => {
    if (inputEmail.value === '') {
        inputEmail.setCustomValidity('Please provide your email address!');
    } else if (inputEmail.value.match(emailPattern) === null) {
        inputEmail.setCustomValidity('This is not a correct email address!');
    } else {
        inputEmail.setCustomValidity('');
    }
});

// Password input custom validity check

const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

inputPassword.addEventListener('input', () => {
    if (inputPassword.value === '') {
        inputPassword.setCustomValidity('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
    } else if (inputPassword.value.match(passPattern) === null) {
        inputPassword.setCustomValidity(`This password doesn't meet the requirements.`);
    } else if (checkPasswordMatch() === false) {
        inputPassword.setCustomValidity(`Password mismatch.`);
    } else {
        inputPassword.setCustomValidity('');
    }
});