import {
    setActive
} from '../actions/notificationAction'

const initialState = {
    notificationState : false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NOTIFICATION' : 
            return Object.assign({}, state, {
                notificationState: action.activeState
            })
        default:
            return state;
    } 
}