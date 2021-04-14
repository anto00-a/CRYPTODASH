
const initialState = () => {
    const coin = 'bitcoin';
    return coin
}

const setId = (state = initialState(), action) =>{
    switch(action.type) {
        case 'FIRST' :
            return state
        case 'NOTFIRST':
            return action.payload
        default :
            return state 
    }
}



export default setId;