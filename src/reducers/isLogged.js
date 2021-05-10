

const isLogged = (state={isLog:false,user:null},action) => {
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