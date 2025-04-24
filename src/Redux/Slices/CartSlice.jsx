import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name : "Cart",
    initialState : [],
    reducers : {
        add : ( state,action ) => { state.push(action.payload)}, //action.payload contains the data we have send to 
        // add function which will be add to the cart
        remove : ( state, action) => { return state.filter((item) => item.id !== action.payload)} //action.payload contains the id of the item
        // which we want to remove from the cart. This will filter out the item from the cart
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;