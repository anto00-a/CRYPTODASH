export const setData = (data) => {
    return {
        type: 'GET',
        payload: data
    }
}

export const noUpdate = (id) => {
    return {
        type: 'NOTFIRST',
        payload: id
    }
}
export const follow = (data) => {
    return{
        type: 'FOLLOWED',
        /*payload: {
            data:data
        }*/payload:data,
    }
}
export const unFollow = (id) => {
    return{
        type: 'UNFOLLOW',
        payload: id
    }
}


export const isLogged = (name) => {
    return{
        type: 'ISLOGGED',
        payload: name
    }
}


