import setId from './updateValue';
import setData from './gettingData';
import {combineReducers} from 'redux';
import followCrypto from './followCard';

const allReducers = combineReducers({
    setId,
    setData,
    followCrypto
})




export default allReducers;