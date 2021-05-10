import setId from './updateValue';
import setData from './gettingData';
import {combineReducers} from 'redux';
import isLogged from './isLogged';
import titleHandler from './getTitle';
import getName from './getName';
import filterHandler from './getFilter'
const allReducers = combineReducers({
    setId,
    setData,
    isLogged,
    titleHandler,
    getName,
    filterHandler
})




export default allReducers;