// function which returns a Boolean for the type of input
function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    input.className = type ? "success" : "error";
    return type;
}

// function which calls showMessage() to show error or no string on success
function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true)
}

// function which checks if an input element has a value
function hasValue(input, message) {
    if (input.value.trim() == "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

// function to validate whether input is an email address, calling on hasValue
function validateEmail(input, requiredMsg, invalidMsg) {
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

// function to validate password

// function to check whether passwords match
function checkPassword(input) {}

// stop form submission, validate fields, and show alerts when submit fires
const form= document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email address";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function(event) {
    // stop form submission
    event.preventDefault();
    // validate fields and show alerts
    let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    // fire submit if valid
    if(nameValid && emailValid) {
        form.submit();
    }
});

// show different success message with subscription checkbox