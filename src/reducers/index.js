import setId from './updateValue';
import setData from './gettingData';
import {combineReducers} from 'redux';
import followCrypto from './followCard';
import isLogged from './isLogged';
import titleHandler from './getTitle';
import signUp from './signup';
import filterHandler from './getFilter'
const allReducers = combineReducers({
    setId,
    setData,
    followCrypto,
    isLogged,
    titleHandler,
    signUp,
    filterHandler
})




export default allReducers;