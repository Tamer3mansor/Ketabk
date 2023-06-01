const handelErrors = (err) => {
  let error = { email: "", password: "", done: true };
  //handel error code
  if (err.message == "incorrect email") {
    error.email = "this email is not register";
    error.done = false;
  }
  if (err.message == "incorrect password") {
    error.password = "this password is incorrect";
    error.done = false;
  }
  if (err.code == 11000) {
    error.email = "email already registered";
    error.done = false;
    return error;
  }
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message.slice(24);
    });
    error.done = false;
  }
  return error;
};
module.exports = { handelErrors };
