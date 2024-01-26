import * as api from "../../api";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};

// here we thunk objects instead of single function
export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
  };
};

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
        console.log("error");
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
      console.log("error");
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
    
    
    dispatch(setUserDetails(userDetails));
    navigate("/dashboard");
    };
  };
};
