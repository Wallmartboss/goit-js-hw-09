const form = document.querySelector('.feedback-form');
const email = document.querySelector("input[type='email']");
const textarea = document.querySelector("textarea[name='message']");

const localStorageKey = 'feedback-form-state';
let userData;
try {
  const filledData = JSON.parse(localStorage.getItem(localStorageKey));
  if (filledData !== null) {
    for (const data in filledData) {
      form.elements[data].value = filledData[data];
    }
  }
} catch (error) {
  console.log(`Error parsing JSON : ${error}`);
}

form.addEventListener('input', () => {
  const userData = {
    email: email.value.trim(),
    message: textarea.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(userData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.removeItem(localStorageKey);
  form.reset();
});
