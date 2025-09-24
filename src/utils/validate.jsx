export const checkValidData = (email, password) => {
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (!isEmailValid) {
    return "Email Not Valid";
  }
  if (!isPasswordValid) {
    return "Password Not Valid";
  }

  return null;
};
