

const initialState = () =>{
    const list = localStorage.getItem('favoriteList');
    return list ? JSON.parse(list) : [];
}




const followCrypto = (state= initialState(), action) => {
    switch (action.type){
        case 'FOLLOWED' :
            if (!state.find(o => o.id === action.payload.id)){
                state.push(action.payload)
                localStorage.setItem('favoriteList', JSON.stringify(state));
            }
            return [...state]
        case 'UNFOLLOW' :
            const removeHandler = (coin) => {
                const newFavorite = state.filter((favorite)=> favorite.id !== coin )
                localStorage.setItem('favoriteList',JSON.stringify(newFavorite))
                return newFavorite;
            }
            return removeHandler(action.payload)
            
             
        default:
            return state
    }
}
export default followCrypto;