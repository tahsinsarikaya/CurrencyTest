  
import { combineReducers } from 'redux';

import commonReducer from './commonReducer';

let rootReducer = combineReducers({ common: commonReducer });

export default rootReducer;