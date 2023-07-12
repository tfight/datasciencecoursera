document.getElementById('signup').addEventListener('submit', function(event) {
    // prevent form submission
    event.preventDefault(); // Prevent form submission
  
    // clear previous error messages
    clearErrors();

    // get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var newsletter = document.getElementById('newsletter').checked;
  
    // validate name field
    if (name.trim() === '') {
      showError('name', 'We need your name to create your account');
    }
  
    // validate email field
    if (email.trim() === '') {
      showError('email', 'We need your email to create your account');
    } else if (!validateEmail(email)) {
      showError('email', 'This is not a valid email format');
    }
  
    // validate password field
    if (password.trim() === '') {
      showError('password', 'Please enter a password');
    } else if (!validatePassword(password)) {
      showError(
        'password',
        'Your password must be at least 8 characters long and also contain a number as well as a special character'
      );
    }
  
    // validate confirm password field
    if (confirmPassword.trim() === '') {
      showError('confirm-password', 'Please confirm your password');
    } else if (password !== confirmPassword) {
      showError('confirm-password', 'Your passwords do not match, please try again');
    }
  
    // display a success message that reflects whether subscribe was ticked
    if (name.trim() !== '' && email.trim() !== '' && validateEmail(email) && validatePassword(password) && password === confirmPassword) {
        // use \' to show an apostrophe without breaking the code
      var message = 'Your Munchkin\'s Makery account has been created successfully';
      if (newsletter) {
        message += ' and you have successfully subscribed to the newsletter';
      }
      showMessage(message);
    }
  });
  
  // function to validate email format, using regular expression
  function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // function to validate password format, using regular expression
  function validatePassword(password) {
    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  }
  
  // function to show error message
  function showError(fieldId, errorMessage) {
    var small = document.querySelector('#' + fieldId + ' + small');
    small.innerText = errorMessage;
    small.style.display = 'block';
  }
  
  // function to clear all error messages
  function clearErrors() {
    var errorMessages = document.querySelectorAll('.field small');
    errorMessages.forEach(function(errorMessage) {
      errorMessage.innerText = '';
      errorMessage.style.display = 'none';
    });
  }
  
  // function to show success message
  function showMessage(message) {
    var successMessage = document.createElement('p');
    successMessage.innerText = message;
    successMessage.style.color = 'green';
    var form = document.getElementById('signup');
    form.appendChild(successMessage);
  }