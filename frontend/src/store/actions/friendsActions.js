import * as api from "../../api";
import { openAlertMessage } from "./alertActions";

export const friendActions={

    SET_FRIENDS: "FRIENDS.SET_FRIENDS",
    SET_PENDING_FRIENDS_INVITATION: "FRIENDS.SET_PENDING_FRIENDS_INVITATION",
    SET_ONLINE_USERS:"FRIENDS.ONLINE_USERS"
    
    
    }

export const getActions=(dispatch)=>{
    return{
        sendFriendInvitation:(data,closeDialogHandler)=> dispatch(sendFriendInvitation(data,closeDialogHandler)),
    }
}

const sendFriendInvitation=(data,closeDialogHandler)=>{
    //we use async fun here to send api request
    return async (dispatch)=>{
        const response = await api.sendFriendInvitation(data);

        if(response.error){
            dispatch(openAlertMessage(response.exception?.response?.data))
            // console.log(response.exception)
        }
        else{
            dispatch(openAlertMessage("invitation has been sent"));
            closeDialogHandler();
        }
    }
}


