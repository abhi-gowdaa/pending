import axios from "axios";
import { logout } from "./shared/utils/auth";

// Now all requests using this instance will wait 1.0 seconds before timing out
const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
});


apiClient.interceptors.request.use((config)=>{
const userDetails=localStorage.getItem("user");
if(userDetails){
  const token=JSON.parse(userDetails).token;
  config.headers.Authorization=`Bearer ${token}`;

}
return config;
},(err)=>{
 return Promise.reject(err);
}
);


export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register" ,data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// secure route ,here we send token too
export const sendFriendInvitation = async (data)=>{
 try{
  return await apiClient.post("/friend-invitation/invite",data);
 }catch(exception){
  checkResponseCode(exception);
  return{
    error:true,
    exception,
  }
 }
}


const checkResponseCode=(exception)=>{
  const responseCode=exception?.response?.status;
  if(responseCode){
    (responseCode===401|| responseCode===403) && logout();
  }
};