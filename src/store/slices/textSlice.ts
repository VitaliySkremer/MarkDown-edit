import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface MarkDownState{
  text: string;
}

const initialState:MarkDownState = {
  text:''
}

export const textSlice = createSlice({
  name:'markdown',
  initialState,
  reducers:{
    setMarkDown:(state,action:PayloadAction<string>)=>{
      state.text = action.payload;
    }
  }
})

export const {setMarkDown} = textSlice.actions;
export default textSlice.reducer;