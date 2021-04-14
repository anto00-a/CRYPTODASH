const initialState = () => {
    const data = [];
    return data
}
const setData = (state = initialState() , action) =>{
    switch(action.type) {
        case 'GET' :
            return action.payload
        default :
            return state 
    }
}



export default setData;