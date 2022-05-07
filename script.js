const password = document.querySelector('#password');
password.addEventListener('keyup', () => {
    checkPasswordMatch();
});
const passwordConfirmation = document.querySelector('#password-confirm');
passwordConfirmation.addEventListener('keyup', () => {
    checkPasswordMatch();
});

const error = document.querySelector('li > p');
error.style.opacity = '0';


function checkPasswordMatch() {
    if ((password.value === passwordConfirmation.value) && (passwordConfirmation.value.length != 0)) {
        error.style.opacity = '0';
        passwordConfirmation.classList.remove('invalid');
        passwordConfirmation.classList.add('valid');
        password.classList.remove('invalid');
        password.classList.add('valid');
    } else if (passwordConfirmation.value.length === 0) {
        error.style.opacity = '0';
        passwordConfirmation.classList.remove('invalid');
        password.classList.remove('invalid');
    } else {
        error.style.opacity = '1';
        passwordConfirmation.classList.remove('valid');
        passwordConfirmation.classList.add('invalid');
        password.classList.remove('valid');
        password.classList.add('invalid');
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