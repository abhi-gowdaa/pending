import React from "react";
import { InputWithLabel } from "../../shared/components/InputWithLabel";

export const LoginPageInputs = (props) => {
  const { mail, setMail, password, setPassword } = props;

  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        palceholder="Enter e-mail address"
      />

      
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="password"
        type="text"
        palceholder="Enter password"
      />
    </>
  );
};
