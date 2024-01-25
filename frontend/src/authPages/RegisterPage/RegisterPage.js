import React, { useEffect, useState } from "react";
import { AuthBox } from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import { RegisterPageInputs } from "./RegisterPageInputs";

import { RegisterPageFooter } from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/utils/Validators";

export const RegisterPage = () => {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
  }, [mail, username, password, setIsFormValid]);

  const handleRegister = () => {
    console.log("register");
  };

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
