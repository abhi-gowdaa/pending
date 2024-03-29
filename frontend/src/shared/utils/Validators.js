export const validateLoginForm = ({ mail, password }) => {
  return (
    validateMail(mail) &&
    validatePassword(password) 
    
  );
};

export const validateRegisterForm = ({ mail, username, password }) => {
  return (
    validateMail(mail) &&
    validatePassword(password) &&
    validateUsername(username)
  );
};

const validatePassword = (password) => {
  return password.length > 5 && password.length < 12;
};

export const validateMail = (mail) => {
  //const pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
  const emailPattern =
    /^([a-zA-Z0-9_-])+@(([a-zA-Z0-9.-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return emailPattern.test(mail);
};

const validateUsername = (username) => {
  return username.length > 2 && username.length < 12;
};
