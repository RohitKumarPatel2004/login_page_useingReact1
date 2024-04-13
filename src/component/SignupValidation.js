function Validation(value) {
  let errors = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Simplified regex

  if (!value.name.trim()) {
    errors.name = "Name should not be empty";
  }

  if (!value.email.trim()) {
    errors.email = "Email should not be empty";
  } else if (!email_pattern.test(value.email)) {
    errors.email = "Email format is incorrect";
  }

  if (!value.password) {
    errors.password = "Password should not be empty";
  } else if (!password_pattern.test(value.password)) {
    errors.password = "Password format is incorrect";
  }

  if (!value.cpassword) {
    errors.cpassword = "Confirm password should not be empty";
  } else if (value.password !== value.cpassword) {
    errors.cpassword = "Passwords do not match";
  }

  return errors;
}

export default Validation;
