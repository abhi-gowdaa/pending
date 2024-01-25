import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { RedirectInfo } from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";

export const RegisterPageFooter = ({ isFormValid, handleRegister }) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <CustomPrimaryButton
        label="Register"
        additionalStyles={{ marginTop: "30px" }}
        disabled={!isFormValid}
        onClick={handleRegister}
      />

      <div>
        <RedirectInfo
          text="Already have an account? "
          redirectText="Login"
          additionalStyles={{ marginTop: "5px" }}
          redirectHandler={handlePushToLoginPage}
        />
      </div>
    </>
  );
};
