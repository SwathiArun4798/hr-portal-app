import {configureStore} from '@reduxjs/toolkit';
import UserReducer from './userReducer';
import leaveDetailsUser from './leaveDetailsReducer';

const store = configureStore({
    reducer: {
      users: UserReducer,
      leaveDetails:leaveDetailsUser
    },
  });

export default store;