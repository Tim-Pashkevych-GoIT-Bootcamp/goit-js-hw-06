const validationInput = document.querySelector('#validation-input');

if (validationInput) {
  validationInput.addEventListener('blur', event => {
    const inputElement = event.currentTarget;
    const minLengthValidation = inputElement.dataset.length;
    const inputValue = inputElement.value;

    if (inputValue.length >= minLengthValidation) {
      inputElement.classList.remove('invalid');
      inputElement.classList.add('valid');
    } else {
      inputElement.classList.remove('valid');
      inputElement.classList.add('invalid');
    }
  });
}
