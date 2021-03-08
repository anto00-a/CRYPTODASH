const initialState = {
        favoriteList: []
    }

const followCrypto = (state = initialState, action) => {
    
    switch(action.type){
        case 'FOLLOWED':
            state.favoriteList.push(action.payload)
        case 'UNFOLLOW':
            return state
        default: 
            return state
    }
}
export default followCrypto;