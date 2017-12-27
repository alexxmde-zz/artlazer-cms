import lang from '../../constants/lang';

export default (values) => {
  const errors = {};
  const { username, password } = values;

  if (!username) {
    errors.username = lang.required;
  }

  if (!password) {
    errors.password = lang.required;
  }

  return errors;
};
