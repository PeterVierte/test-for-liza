import { configureStore } from '@reduxjs/toolkit';
import {postsSlice} from "./reducers/PostsSlice";

export const store = configureStore({
    reducer: {
        postReducer: postsSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch