
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

function validateForm(event) {
    // validate required fields
    var elems = event.target.elements,
        isValid = false;
    for (var i = 0; i < elems.length; i++) {
        if(isRequired(elems[i]) && isBlank(elems[i])) {
            console.log("missing required field: ", elems[i].name);
        }
    }
    if (!isValid) {
        event.preventDefault();
    }
}

function init() {
    var form = document.forms[0],
        err;
    form.noValidate = true;
    form.addEventListener('submit', validateForm);
}

document.addEventListener('DOMContentLoaded', init);
