const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', ({ target: { value } }) => {
  let validValue = value.trim();
  validValue
    ? (output.textContent = value)
    : (output.textContent = 'Anonymous');
});
