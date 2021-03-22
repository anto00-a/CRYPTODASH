

const isLogged = (state=null,action) => {
    switch (action.type){
        case 'ISLOGGED': 
            return state = action.payload
        case 'NOTLOGGED':
            return state = ''
        default:
            return state
    }
}



export default isLogged;