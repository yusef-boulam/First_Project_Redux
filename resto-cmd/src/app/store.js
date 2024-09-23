import { configureStore, createAction } from "@reduxjs/toolkit"
import { createReducer } from "@reduxjs/toolkit"


let state = {
    value: null,
    list: []
};

export const addProduct = createAction('ADD_PRODUCT', (product) => {
    return {
        payload: product
    }
})
export const removeProduct = createAction('REMOVE_PRODUCT', () => { })

export const applyVoucher = createAction('APPLY_VOUCHER', (voucher) => {
    return {
        payload: voucher
    }
})

export const updateFirstName = createAction('UPDATE_FIRSTNAME', (firstName) => {
    return {
        payload: firstName
    }
})


const reducer = createReducer(state, {

    [addProduct]: (currentState, action) => {
        const listWithNewProduct = [...currentState.list, action.payload]
        return {
            ...currentState,
            list: listWithNewProduct
        }
    },

    [removeProduct]: (currentState, action) => {
        const listWithoutProduct = currentState.list.filter(
            (item, index) => index !== action.payload
        )
        return {
            ...currentState,
            list: listWithoutProduct
        }
    }
    ,
    [applyVoucher]: (currentState, action) => {
        const withVoucherList = currentState.list.map(
            item => item.title === 'Super Crémeux' ? { ...item, price: action.payload.price } : item
        )
        return {
            ...currentState,
            list: withVoucherList
        }
    }
    ,

})


export const store = configureStore(
    {
        preloadedState: state,
        reducer
    }
)