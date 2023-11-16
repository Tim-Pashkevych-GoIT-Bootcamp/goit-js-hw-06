let counterValue = 0;
const counter = document.querySelector('#value');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    if (event.currentTarget.dataset.action === 'decrement') {
      counterValue--;
    } else {
      counterValue++;
    }

    counter.textContent = counterValue;
  });
});
