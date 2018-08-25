/* This module is used to combine all 
     the reducer if the reducer is more than one 
*/

import {combineReducers} from 'redux';
import dataDetail from './bus-data';

const allReducers = combineReducers({
	data : dataDetail
});

export default allReducers;
