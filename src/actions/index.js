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

/*export const follow = (data) => {
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
*/

export const isLogged = (isLog,user) => {
    return{
        type: 'ISLOGGED',
        payload: {
            isLog,
            user

        }
    }
}


export const title = (title) => {
    return{
        type:title,
        payload: title
    }
}



export const getName = (name)=>{
    return{
        type:'GETNAME',
        payload: name,
    }
}


export const getFilter = (filter) =>{
    return {
        type:filter,
        payload:filter
    }
}