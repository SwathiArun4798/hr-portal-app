import {configureStore} from '@reduxjs/toolkit';
import UserReducer from './userReducer';

const store = configureStore({
    reducer: {
      users: UserReducer,
    },
  });

export default store;