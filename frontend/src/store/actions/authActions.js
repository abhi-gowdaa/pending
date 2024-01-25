import * as api from "../../api"

export const authActions={
    
        SET_USER_DETAILS:"AUTH.SET_USER_DETAILS"
}

// here we thunk objects instead of single function
export const getActions=(dispatch)=>{
    return{
    login:(userDetails,navigate)=>dispatch(login(userDetails,navigate)),
    register:(userDetails,navigate)=>dispatch(register(userDetails,navigate))
    }
}

const login=(userDetails,navigate)=>{

    
}

const register=(userDetails,navigate)=>{
    
}