import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducers'
import { setupListeners } from '@reduxjs/toolkit/query'
import { hikeApi } from '../services/hike.service';
import { mountainApi } from '../services/mountian.service'
import { routeApi } from '../services/routes.service';
import { userApi } from '../services/user.service';




export const store = configureStore({
    reducer: {
        rootReducer,
        [hikeApi.reducerPath]: hikeApi.reducer,
        [mountainApi.reducerPath]: mountainApi.reducer,
        [routeApi.reducerPath]:routeApi.reducer,
        [userApi.reducerPath]:userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(hikeApi.middleware)
    .concat(mountainApi.middleware)
    .concat(routeApi.middleware)
    .concat(userApi.middleware)

});


setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch