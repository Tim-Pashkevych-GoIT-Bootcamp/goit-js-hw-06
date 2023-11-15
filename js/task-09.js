function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('button.change-color');

changeColorButton.addEventListener('click', event => {
  const bodyElement = document.querySelector('body');
  const colorElement = document.querySelector('span.color');
  const randomHexColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomHexColor;
  colorElement.textContent = randomHexColor;
});
