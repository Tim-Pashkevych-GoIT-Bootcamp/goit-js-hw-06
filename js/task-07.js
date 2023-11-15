const inputFontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// Set defalut value
const dafaultValue = inputFontSizeControl.getAttribute('min');
inputFontSizeControl.value = dafaultValue;
text.style.fontSize = dafaultValue + 'px';

// Add event listener
inputFontSizeControl.addEventListener('input', event => {
  const inputElement = event.currentTarget;
  text.style.fontSize = inputElement.value + 'px';
});
