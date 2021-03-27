


const titleHandler= (state='Dashboard',action) =>{
    switch (action.type){
        case 'News':
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}



export default titleHandler;