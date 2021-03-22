import setId from './updateValue';
import setData from './gettingData';
import {combineReducers} from 'redux';
import followCrypto from './followCard';
import isLogged from './isLogged';


const allReducers = combineReducers({
    setId,
    setData,
    followCrypto,
    isLogged
})




export default allReducers;