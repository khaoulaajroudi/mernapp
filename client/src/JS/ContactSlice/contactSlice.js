import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getcontact=createAsyncThunk("contact/get",async()=>{
    try {
       let result= axios.get("http://localhost:5000/contact")
       return result;
    } catch (error) {
        console.log(error)
    }
})

export const addcontact=createAsyncThunk("contact/add",async(contact)=>{
    try {
        let result= await axios.post("http://localhost:5000/contact/add",contact)
        return result
    } catch (error) {
        console.log(error)
    }
    })

    export const deletecontact=createAsyncThunk('user/del',async (id) => {
        try {
          let result= axios.delete(`http://localhost:5000/contact/${id}`);
        
          return result
          
        } catch (error) {
          console.log(error)
        }
      })


      export const updtcontact=createAsyncThunk('user/updt',async ({id,contact}) => {
        try {
          let result= axios.put(`http://localhost:5000/person/put/${id}`,contact);
        
          return result
          
        } catch (error) {
          console.log(error)
        }
      })



const initialState = {
  contact: null,
  status:null
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers:{
    [getcontact.pending]:(state)=>{state.status="pending"},
    [getcontact.rejected]:(state)=>{state.status="failed"},
    [getcontact.fulfilled]:(state,action)=>{state.status="successful";
    state.contact=action.payload.data?.contact},
    [addcontact.pending]:(state)=>{state.status="pending"},
    [addcontact.fulfilled]:(state)=>{state.status="fulfilled"},
    [addcontact.rejected]:(state,action)=>{state.status="rejected"},
    [deletecontact.fulfilled]: (state) => {state.status="successe"},
    [deletecontact.rejected]: (state) => {state.status="failed"},
    [deletecontact.pending]: (state) => {state.status="pending"},
    [updtcontact.fulfilled]: (state) => {state.status="successe"},
    [updtcontact.rejected]: (state) => {state.status="failed"},
    [updtcontact.pending]: (state) => {state.status="pending"},
  }
})
// Action creators are generated for each case reducer function

export default contactSlice.reducer