import { friendActions } from "../actions/friendsActions" 

 const initState={
    friends:[],
    PendingFriendsInvitations:[],
    onlineUsers:[],
 }

 const reducers=(state = initState,action)=>{
    switch(action.type)
    {
      case friendActions.SET_FRIENDS:
        return{
            ...state,
            friends:action.friends,
        }

        case friendActions.SET_ONLINE_USERS:
            return{
                ...state,
                onlineUsers:action.onlineUsers
            }
        
            case friendActions.SET_PENDING_FRIENDS_INVITATION:
                return{
                    ...state,
                    PendingFriendsInvitations:action.PendingFriendsInvitations,
                }
        
        default:
            return state
    }
}



 export default reducers;