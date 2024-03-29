import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

// here we thunk objects instead of single function
export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
    setUserDetails:(userDetails)=>dispatch(setUserDetails(userDetails)) //execute 20 line it passess (have same name but different func,thisn is thunk that is just object func)
  };
};


// returns content =>dispatch(setUserDetails(userDetails))===dispatch(type: authActions.SET_USER_DETAILS,userDetails)
const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails); 
    console.log(response);

    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
      console.log(response?.exception?.response?.data);
        //console.log("error");
    } else {
        const { userDetails } = response?.data;
        localStorage.setItem("user", JSON.stringify(userDetails));
    
    
    dispatch(setUserDetails(userDetails));
    navigate("/dashboard");
    };
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    console.log(response);


    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      
      
      dispatch(setUserDetails(userDetails));
      navigate("/dashboard");
    };
  };
};
