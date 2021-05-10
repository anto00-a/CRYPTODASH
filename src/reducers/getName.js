
const getName = (state= '', action) => {
    switch (action.type){
        case 'GETNAME' :
            return state = action.payload  
        default:
            return state
    }
}


export default getName;


