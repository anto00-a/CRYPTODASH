const setId = (state = 'bitcoin', action) =>{
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