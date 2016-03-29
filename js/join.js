
function isRequired(el) {
    return (typeof (el.required === 'boolean' && el.required) ||
            typeof el.required === 'string') // supported in older browsers
}

function isBlank(el) {
    return el.value === null || el.value === "";
}

function validEmail(email) {
    var pattern = /^[^@]+@[^@]+\.[A-Za-z]+$/;
    return pattern.test(email);
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function displayErrorMessage(msg, errorField) {
    // create the error element
    var elem = document.createElement('p');
    elem.classList.add('elem-error');
    // attach the msg
    elem.textContent = msg;
    elem.style.color = 'red';
    // insert it after the errorField
    insertAfter(elem, errorField);
}

function clearErrorMessages() {
    var errors = document.getElementsByClassName('elem-error');
    while(errors.length > 0) {
        errors.item(errors.length - 1).remove();
    }
}

function validateForm(event) {
    var elems = event.target.elements,
        isValid = true,
        emailField = event.target.elements.email,
        username = event.target.elements.username.value,
        errorMessage;
    event.preventDefault();

    clearErrorMessages();
    // validate required fields
    for (var i = 0; i < elems.length; i++) {
        if(isRequired(elems[i]) && isBlank(elems[i])) {
            displayErrorMessage(elems[i].name + ' is required', elems[i]);
            isValid = false;
        }
    }
    // validate email if it isn't already blank
    if (!isBlank(emailField) && !validEmail(emailField.value)) {
        displayErrorMessage('email format is invalid', emailField);
        isValid = false;
    }

    event.target.setAttribute('action', 'gallery.html');
    // save the username so it can be displayed on the gallery page
    window.sessionStorage.setItem('username', username);

    if (isValid) {
        window.location.href = 'gallery.html';
    }
}

function init() {
    // polyfill for Node.remove
    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }

    var form = document.forms[0],
        err;
    form.noValidate = true;
    form.addEventListener('submit', validateForm);
}

document.addEventListener('DOMContentLoaded', init);
