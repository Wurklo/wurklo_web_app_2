
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

// slices or reducers
import greeting from './slices/greeting';
import user from './slices/user';

export const store = configureStore({
    reducer: {
        greeting: greeting,
        user: user,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});