const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// input.addEventListener('input', ({ target: { value } }) => {
//   const validValue = value.trim();
//   validValue
//     ? (output.textContent = value)
//     : (output.textContent = 'Anonymous');
// });
//or
const getValue = ({ target: { value } }) => {
  const validValue = value.trim();
  validValue
    ? (output.textContent = value)
    : (output.textContent = 'Anonymous');
};
input.addEventListener('input', getValue);
