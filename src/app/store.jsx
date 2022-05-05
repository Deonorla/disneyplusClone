import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import  useReducer from '../Features/user/UserSlice';
import movieReducer from '../Features/Movie/MovieSlice';
export default configureStore({
    reducer: {
        user: useReducer,
        movie: movieReducer 
    },

    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});