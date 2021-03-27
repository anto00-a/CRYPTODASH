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
/*export const notUpdate = () => {
    return {
        type: 'FIRST'
    }
}*/
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


export const isLogged = (name,isLog) => {
    return{
        type: 'ISLOGGED',
        payload: {
            name:name,
            isLog :isLog
        }
    }
}


export const title = (title) => {
    return{
        type:'News',
        payload: title
    }
}

