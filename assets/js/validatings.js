/**variables */
var form = document.querySelector('#form'),
    email = document.querySelector('#email'),
    subject = document.querySelector('#subject'),
    message = document.querySelector('#message'),
    sendBtn = document.querySelector('#send'),
    resetBtn = document.querySelector('#reset');



/**events */
// validate fields
email.addEventListener('blur', validateFields);
subject.addEventListener('blur', validateFields);
message.addEventListener('blur', validateFields);

// reset btn
resetBtn.addEventListener('click', resetForm);

// submit form
sendBtn.addEventListener('click', submitForm);


/**functions */
// submit form
function submitForm(e) {
    e.preventDefault();

    const loaders = document.querySelector('.loaders');

    loaders.children[0].classList.add('spinner');

    setTimeout(() => {
        loaders.children[0].classList.remove('spinner');
        loaders.children[1].classList.add('mail');
        setTimeout(() => {
            loaders.children[1].classList.remove('mail');
        }, 5000);
    }, 3000);
}

// validating fields of form
function validateFields() {
    // validate length of fields
    validateLength(this);
    // validate email field
    if (this.type === 'email') {
        validateEmail(this)
    }

    // check if there is no error found this codes will be executed
    const error = document.querySelectorAll('.error');
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if (error.length === 0) {
            sendBtn.disabled = false;
        }
    }

    // if error found you can't send
    if (email.value !== '' || subject.value !== '' || message.value !== '') {
        if (error.length > 0) {
            sendBtn.disabled = true;
        }
    }
}

// validate length of fields
function validateLength(fields) {
    if (fields.value.length > 0) {
        fields.style.borderBottomColor = 'limegreen';
        fields.classList.remove('error');
    } else {
        fields.style.borderBottomColor = '#ff0000cc';
        fields.classList.add('error');
    }
}

// validate email field contains @
function validateEmail(emailField) {
    const emailText = emailField.value;

    if (emailText.includes('@')) {
        emailField.style.borderBottomColor = 'limegreen';
        emailField.classList.remove('error');
    } else {
        emailField.style.borderBottomColor = '#ff0000cc';
        emailField.classList.add('error');
    }
}

// reset form
function resetForm() {
    form.reset();
}