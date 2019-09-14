export default function validateSignupInput(data) {
  let errors = {};
  let validationResult = false;
  const mailFormat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const users = JSON.parse(localStorage.getItem('Users') || '[]')

  if (data.name === undefined || data.name.trim().length === 0) {
    errors.name = 'This can\'t be blank.';
  }

  if (data.email === undefined || data.email.trim().length === 0) {
    errors.email = 'This can\'t be blank.';
  } else if (!data.email.match(mailFormat)) {
    errors.email = 'Please enter valid email address.';
  } else if (users.find(user => user.email === data.email)) {
    errors.email = 'Email address has already been taken.';
  }

  if (data.mobile === undefined || data.mobile.trim().length === 0) {
    errors.mobile = 'This can\'t be blank.';
  } else if (data.mobile.trim().length !== 10) {
    errors.mobile = 'Mobile number length should be 10.';
  }

  if (data.password === undefined || data.password.trim().length === 0) {
    errors.password = 'This can\'t be blank.';
  } else if (data.password.trim().length < 6) {
    errors.password = 'Password length should be 6 or more.';
  }

  if (data.passwordConfirmation === undefined || data.passwordConfirmation.trim().length === 0) {
    errors.passwordConfirmation = 'This can\'t be blank.';
  } else if (data.passwordConfirmation.length < 6) {
    errors.passwordConfirmation = 'Password confirmation length should be 6 or more.';
  } else if (data.passwordConfirmation !== data.password) {
    errors.passwordConfirmation = 'Password confirmation should be matched with password.';
  }

  if (Object.keys(errors).length === 0) {
    validationResult = true;
  }

  return {
    errors,
    isValid: validationResult
  }
}
