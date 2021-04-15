import {createStore} from 'redux';
import allReducers from '../reducers';

function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState)
    }catch(e){
        console.log(e)
    }
}


function loadToLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state')
        if(serializedState===null) return undefined
        return JSON.parse(serializedState);
    }catch(e){
        console.log(e);
        return undefined
    }
}
const persistedState = loadToLocalStorage();
const store = createStore(allReducers,persistedState);
store.subscribe(()=>saveToLocalStorage(store.getState()))



export {store}