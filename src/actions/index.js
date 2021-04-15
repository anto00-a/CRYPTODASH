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
        payload:data,
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
        type:title,
        payload: title
    }
}



export const signed = (user)=>{
    return{
        type:'SIGNED',
        payload: user,
    }
}


export const getFilter = (filter) =>{
    return {
        type:filter,
        payload:filter
    }
}