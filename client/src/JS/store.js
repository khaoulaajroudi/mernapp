import { configureStore } from '@reduxjs/toolkit'
import contactSlice from './ContactSlice/contactSlice'
export const store = configureStore({
  reducer: {contact:contactSlice},
})