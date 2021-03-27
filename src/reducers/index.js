import setId from './updateValue';
import setData from './gettingData';
import {combineReducers} from 'redux';
import followCrypto from './followCard';
import isLogged from './isLogged';
import titleHandler from './getTitle'

const allReducers = combineReducers({
    setId,
    setData,
    followCrypto,
    isLogged,
    titleHandler
})




export default allReducers;