import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {markdown} from 'markdown';

export interface MarkDownState{
  text: string;
  mdText: string;
}

const initialState:MarkDownState = {
  text:'',
  mdText:''
}

export const textSlice = createSlice({
  name:'markdown',
  initialState,
  reducers:{
    setMarkDown:(state,action:PayloadAction<string>)=>{
      state.text = action.payload;
      state.mdText = markdown.toHTML(action.payload)
    }
  }
})

export const {setMarkDown} = textSlice.actions;
export default textSlice.reducer;