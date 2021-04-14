const initialState = () =>{
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}


const signUp = (state=initialState(),action)=>{
    switch (action.type){
        case 'SIGNED' :
            state.push(action.payload)
            localStorage.setItem('users', JSON.stringify(state));
            return [...state]
        default:
            return state
    }
}



export default signUp;