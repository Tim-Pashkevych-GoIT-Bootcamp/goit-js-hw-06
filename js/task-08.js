const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formSubmitionData = {};
  const formElement = event.currentTarget;
  const emailValue = formElement.elements.email.value.trim();
  const passwordValue = formElement.elements.password.value.trim();
  let validationPassThroughSuccessfully = true;

  // Validation
  if (emailValue === '') {
    alert('Email is required');
    validationPassThroughSuccessfully = false;
  }
  if (passwordValue === '') {
    alert('Password is required');
    validationPassThroughSuccessfully = false;
  }

  // If there is no validation errors, then process data
  if (validationPassThroughSuccessfully) {
    // Loop through all elements and add all to the object except BUTTONS
    [...formElement.elements].forEach(element => {
      if (element.nodeName !== 'BUTTON') {
        formSubmitionData[element.getAttribute('name')] = element.value.trim();
      }
    });

    // Output results to the console
    console.log(formSubmitionData);
    // Reset the form
    formElement.reset();
  }
});
