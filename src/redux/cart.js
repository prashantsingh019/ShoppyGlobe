import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
    },
    reducers:{
        addToCart:(state,action)=>{
           state.cartItems.push(action.payload);
        //    console.log(action.payload);
        },
        removeItem:(state,action)=>{
           state.cartItems = state.cartItems.filter((item) => item.id != action.payload)
        }
    }
})

export const {addToCart,removeItem} = cartSlice.actions;

export default cartSlice.reducer;