let counterValue = 0;
const counter = document.querySelector('#value');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    if (event.currentTarget.dataset.action === 'decrement') {
      counterValue--;
    } else {
      counterValue++;
    }

    if (counter) {
      counter.textContent = counterValue;
    }
  });
});
