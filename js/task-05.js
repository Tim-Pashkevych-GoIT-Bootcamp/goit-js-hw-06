const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  //  Тут умовою тринарного опература являється вираз:
  // event.currentTarget.value.length
  // який або 0(false) або більше нуля(true)
  outputName.textContent = event.currentTarget.value.length
    ? event.currentTarget.value
    : 'Anonymous';
});
