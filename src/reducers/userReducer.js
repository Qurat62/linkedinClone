const INITIAL_STATE={
    user:null,
}
//reducer is a state updater
const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user //takes the prev state and adds a new user to the user
            };
    default: 
    return state;
    }
};

export default userReducer;