import { combineReducers } from 'redux';
import settings from './settings';
import updateProvinceState from './provinceReducer'
import updateNotificationState from './notificationReducer'
export default combineReducers({
    settings,
    updateProvinceState,
    updateNotificationState
});