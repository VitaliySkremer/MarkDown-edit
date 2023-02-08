import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface NameDoc{
  name: string
}

const initialState:NameDoc = {
  name:'Untitled Document'
}

export const nameDocSlice = createSlice({
  name:'nameDoc',
  initialState,
  reducers:{
    setNameDoc:(state, action:PayloadAction<string>)=>{
      state.name = action.payload
    }
  }
})

export const {setNameDoc} = nameDocSlice.actions;
export default  nameDocSlice.reducer