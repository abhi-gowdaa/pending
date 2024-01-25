 import React from "react";
import { InputWithLabel } from "../../shared/components/InputWithLabel";

export const RegisterPageInputs = (props) => {
  const { mail, setMail, username, setUsername, password, setPassword } = props;

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
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        palceholder="Enter username"
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
