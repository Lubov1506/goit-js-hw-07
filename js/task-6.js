function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input[type='number']");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const getInputValue = () => {
  return input.value;
};
const isValidInput = inputValue => inputValue > 0 && inputValue <= 100;

const createBoxes = amount => {
  input.value = '';

  if (!isValidInput(amount)) {
    return;
  }

  boxes.innerHTML = '';
  let width = 30;
  let height = 30;

  let fragment = document.createDocumentFragment();

  for (let i = 1; i <= amount; i++) {
    const box = document.createElement('div');
    if (i === 1) {
      box.style.width = `${width}px`;
      box.style.height = `${height}px`;
    } else {
      box.style.width = `${(width += 10)}px`;
      box.style.height = `${(height += 10)}px`;
    }
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }
  boxes.append(fragment);
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

btnCreate.addEventListener('click', () => createBoxes(getInputValue()));
btnDestroy.addEventListener('click', destroyBoxes);
