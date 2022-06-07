import { combineReducers } from 'redux';
import settings from './settings';
import updateProvinceState from './provinceReducer'
export default combineReducers({
    settings,
    updateProvinceState
});