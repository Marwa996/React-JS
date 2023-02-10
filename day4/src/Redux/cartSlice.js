import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    cart:[],
    cartTotalQuantity:0,
    cartTotalAmount:0
}

let cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{

        addToCart(state,action){
            console.log(action.payload)
            console.log(state.cart)

            const itemIndex=state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if(itemIndex>=0){
                state.cart[itemIndex].cartQuantity +=1;
            }else{
                const tempMovie = {...action.payload, cartQuantity:1}
                state.cart.push(tempMovie);
            }

        },
        removeFromCart(state,action){
            const tempMovie=state.cart.filter((item)=>item.id!=action.payload.id);
            state.cart=tempMovie;
        }
    },
});

export const { addToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;