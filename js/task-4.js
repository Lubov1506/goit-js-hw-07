const form = document.querySelector('.login-form');
const btn = document.querySelector('.login-form button');
let data = [];

const handleSubmit = e => {
  e.preventDefault();
  const elements = Array.from(e.target.elements);

  const validEmail = strTrim(elements[0].value);
  const validPassword = strTrim(elements[1].value);
  if (validEmail.length === 0 || validPassword.length === 0) {
    alert('All form fields must be filled in');
  } else {
    const newData = { email: validEmail, password: validPassword };
    console.log(newData);
    data.push(newData);
    e.target.reset();
  }
};

form.addEventListener('submit', e => handleSubmit(e));

const strTrim = str => str.trim();
