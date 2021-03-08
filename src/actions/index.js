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
        payload: data
    }
}
export const unFollow = () => {
    return{
        type: 'UNFOLLOW'
    }
}