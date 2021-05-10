
const setData = (state = [], action) =>{
    switch(action.type) {
        case 'GET' :
            return action.payload
        default :
            return state 
    }
}



export default setData;