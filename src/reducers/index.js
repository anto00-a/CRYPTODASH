import setId from './updateValue';
import setData from './gettingData';
import {combineReducers} from 'redux';
import isLogged from './isLogged';
import titleHandler from './getTitle';
import getName from './getName';
import filterHandler from './getFilter'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['isLogged','getName']
}
const allReducers = combineReducers({
    setId,
    setData,
    isLogged,
    titleHandler,
    getName,
    filterHandler
})




export default persistReducer(persistConfig,allReducers)