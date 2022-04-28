import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import  useReducer from '../Features/user/UserSlice'
export default configureStore({
    reducer: {
        user: useReducer 
    },

    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});