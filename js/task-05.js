const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  outputName.textContent = event.currentTarget.value.length
    ? event.currentTarget.value
    : 'Anonymous';
});
