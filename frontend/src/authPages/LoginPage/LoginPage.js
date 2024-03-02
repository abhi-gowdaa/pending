import React, { useEffect, useState } from "react";
import { AuthBox } from "../../shared/components/AuthBox";
import { LoginPageHeader } from "./LoginPageHeader";
import {LoginPageInputs} from "./LoginPageInputs";
import { LoginPageFooter } from "./LoginPageFooter";
import { validateLoginForm } from "../../shared/utils/Validators";
import { getActions } from "../../store/actions/authActions";
import {connect} from "react-redux";
import { useNavigate } from "react-router-dom";


//connect gives props to access redux ,use destructuring to get login
const LoginPage = ({login}) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password,setIsFormValid]);

  const handleLogin = () => {
    const userDetails={
      mail,
      password,
    };
    login(userDetails,navigate);
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid}
       handleLogin={handleLogin} /> 
    </AuthBox>
  );
};

const mapActionsToProps=(dispatch)=>{
  return{
  ...getActions(dispatch)
}
}

export default connect(null,mapActionsToProps)(LoginPage)