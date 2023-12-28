 
const initialState={
  userDetail:null
};


const reducer=(state= initialState,action)=>{
  
    switch(action.type){

        case 'DUMMY':
            return{
                ...state
            }
        
        default:{
            return null
        }

    }

}

export default reducer;

