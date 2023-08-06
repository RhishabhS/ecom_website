import { createSlice } from "@reduxjs/toolkit"; 
import Product from './../Product';
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[] as any,
        quantity:[] as any,
        total:0,

    },
    reducers:{
        addProduct: (state,action)=>{
            state.quantity.push(action.payload.quantity);
            state.products.push(action.payload);
            state.total+=action.payload.price*action.payload.quantity;
        },
        removeProduct:(state,action)=>{
            const index=state.products.findIndex(action.payload.cartOutput);
            state.quantity.splice(index,1);
            state.total-=action.payload.price*action.payload.quantity;
        }
    }
});

export const {addProduct,removeProduct}=cartSlice.actions;
export default cartSlice.reducer;