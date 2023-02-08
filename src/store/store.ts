import {configureStore} from "@reduxjs/toolkit";
import textReducer from "./slices/textSlice";
import nameReducer from './slices/nameDocSlice'

export const store = configureStore({
  reducer:{
    markdown: textReducer,
    nameDoc: nameReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;