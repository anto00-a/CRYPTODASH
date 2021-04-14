const initialState = () => {
    const log = {name:'',isLog:false};
    return log
}

const isLogged = (state=initialState(),action) => {
    switch (action.type){
        case 'ISLOGGED': 
            return state = action.payload
        case 'NOTLOGGED':
            return state = action.payload
        default:
            return state
    }
}



export default isLogged;