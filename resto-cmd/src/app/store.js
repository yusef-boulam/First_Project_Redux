import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";

let state = {
    owner: {},
    list: [
    ]
};

export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({ // utilisé pour combiner nos reducers
            owner: ownerSlice.reducer,
            list: cartSlice.reducer,
        })
    }
)