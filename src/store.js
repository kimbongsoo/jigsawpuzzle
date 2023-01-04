import { configureStore, createSlice } from '@reduxjs/toolkit'

let imgUrl = createSlice({
    name : ' imgUrl',
    initialState : 'num'
})


export default configureStore({
  reducer: {
    imgUrl2 : imgUrl.reducer
   }
}) 