import validator from 'validator';

export const formValidation = ({ name, email }) => { 
  name = String(name).trim();
  email = String(email).trim();

  if (name.length < 2 || name.email >= 40) {
    return false;
  }
  if (name.search(/[^A-Za-z\s]/) !== -1) {
    return false;
  }
  if (!validator.isEmail(email)) {
    return false;
  }

  return true;
}