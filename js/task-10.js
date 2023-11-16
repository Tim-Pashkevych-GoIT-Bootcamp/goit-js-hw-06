class BoxesCollection {
  boxes;
  #defaultWidth;
  #defaultHeight;
  #sizeIncrement;

  constructor(
    { width = 30, height = 30, sizeIncrement = 10 } = {
      width: 30,
      height: 30,
      sizeIncrement: 10,
    },
  ) {
    console.log(width, height, sizeIncrement);
    this.boxes = [];
    this.#defaultWidth = width;
    this.#defaultHeight = height;
    this.#sizeIncrement = sizeIncrement;
  }

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  addBox() {
    this.boxes.push({
      label: this.boxes.length + 1,
      width: this.#defaultWidth + this.boxes.length * this.#sizeIncrement,
      height: this.#defaultHeight + this.boxes.length * this.#sizeIncrement,
      backgroundColor: this.getRandomHexColor(),
    });
  }

  createBoxes(amount) {
    while (amount) {
      this.addBox();
      amount--;
    }
  }

  destroyBoxes() {
    this.boxes.length = 0;
  }

  render() {
    return this.boxes
      .map(
        box =>
          `<div class="align-conten-center" style="width: ${box.width}px; height: ${box.height}px; background-color: ${box.backgroundColor};"><div>${box.label}</div></div>`,
      )
      .join('');
  }
}

const boxesCollecton = new BoxesCollection();
const buttons = document.querySelectorAll('button');
const number = document.querySelector('input[type="number"]');
const boxes = document.querySelector('#boxes');

// Add event listener for our buttons
buttons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    const buttonElement = event.currentTarget;
    const numberOfBoxes = number.value;

    // Create button clicked
    if (buttonElement.dataset.create === '' && numberOfBoxes) {
      // Destroy previous boxes
      boxesCollecton.destroyBoxes();
      // Add new boxes
      boxesCollecton.createBoxes(numberOfBoxes);
    }

    // Destroy button clicked
    if (buttonElement.dataset.destroy === '') {
      boxesCollecton.destroyBoxes();
    }

    // Update markup
    boxes.innerHTML = boxesCollecton.render();
  });
});
