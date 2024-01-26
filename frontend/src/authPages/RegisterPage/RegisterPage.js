import React, { useEffect, useState } from "react";
import { AuthBox } from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import { RegisterPageInputs } from "./RegisterPageInputs";

import { RegisterPageFooter } from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/Validators";
import { getActions } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

//connect gives props to access redux ,use destructuring to get register

export const RegisterPage = ({ register }) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    console.log("hiih")
    const userDetails = {
      mail,
      password,
      username,
    };
    register(userDetails, navigate); //authaction
  };

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
  }, [mail, username, password, setIsFormValid]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);
