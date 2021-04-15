const initialState = () =>{
    const users = localStorage.getItem('state');
    return users ? JSON.parse(users) : [];
}


const signUp = (state=initialState(),action)=>{
    switch (action.type){
        case 'SIGNED' :
            state.push(action.payload)
            return [...state]
        default:
            return state
    }
}



export default signUp;


