import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'list',
    initialState: {}, // le state par défaut de notre slice
    reducers: {
        // action ADD_PRODUCT déplacée ici
        addProduct: (currentState, action) => {
            const listWithNewProduct = [...currentState, action.payload]
            return listWithNewProduct
        },
        // action REMOVE_PRODUCT déplacée ici
        removeProduct: (currentState, action) => {
            const list = [...currentState.list].filter(
                (item, index) => index !== action.payload
            )
            return list
        },
        // action APPLY_VOUCHER déplacée ici
        applyVoucher: (currentState, action) => {
            const withVoucherList = currentState.map(
                item => item.title === 'Super Crémeux' ? ({ ...item, price: action.payload.price }) : item
            )
            return withVoucherList
        },
    }
})