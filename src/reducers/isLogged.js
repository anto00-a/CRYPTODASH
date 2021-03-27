

const isLogged = (state={name:'', isLog:false},action) => {
    switch (action.type){
        case 'ISLOGGED': 
            //action.payload.isLog = true
            console.log(state)
            return state = action.payload
        case 'NOTLOGGED':
            return state = action.payload
        default:
            return state
    }
}



export default isLogged;