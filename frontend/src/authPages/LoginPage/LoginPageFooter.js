import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { RedirectInfo } from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "enter the correct email and password";
};

const getFormValidMessage = () => {
  return "click to login";
};

export const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  //const history=useHistory()old way

  const handlePushToRegisterPage = () => {
    navigate("/register");
    //history.push('/register')old way
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Log in"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};
