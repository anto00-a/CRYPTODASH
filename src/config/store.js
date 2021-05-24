import {createStore} from 'redux';
import allReducers from '../reducers';
import {composeWithDevTools} from "redux-devtools-extension"; 
import {persistStore} from 'redux-persist';



const store = createStore(allReducers, composeWithDevTools());
const persistor = persistStore(store);



export {store,persistor}