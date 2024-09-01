let form = document.forms.formOne;
const userNameInput = form.elements.username;
const emailInput = form.elements.email;
const ageInput = form.elements.age;
const agreeTermsCheckbox = form.elements.agreeTerms;

const userNameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const termsError = document.getElementById('termsError');
const ageError = document.getElementById('ageError');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  let hasError = false;

  userNameError.style.display = 'none';
  emailError.style.display = 'none';
  termsError.style.display = 'none';
  ageError.style.display = 'none';

  if (userNameInput.value === '') {
    userNameError.textContent = 'Введите имя пользователя.';
    userNameError.style.display = 'block';
    hasError = true;
  }
  if (ageInput.value === '') {
    ageError.textContent = 'Введите возраст.';
    ageError.style.display = 'block';
    hasError = true;
  }

  if (validateEmail(emailInput.value) === false) {
    emailError.textContent = 'Введите корректный email.';
    emailError.style.display = 'block';
    hasError = true;
  }

  if (agreeTermsCheckbox.checked === false) {
    termsError.textContent = 'Необходимо согласие с условиями.';
    termsError.style.display = 'block';
    hasError = true;
  }

  if (hasError === false) {
    submitBtn.disabled = !agreeTermsCheckbox.checked;
    alert('Форма успешно отправлена!');
  }
});

function validateEmail(email) {
  let regex = /^\\w+@\\w+\\.\\w+$/;
  return regex.test(email);
}