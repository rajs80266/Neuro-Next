import { combineReducers } from 'redux';

const UserReducer = (user = {}, action) => {
    if (action.type === 'SET_USER') {
      return action.payload;
    }
    return user;
};

export default combineReducers({ user: UserReducer });