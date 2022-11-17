import React from "react";
import {usersAPI} from "../api/api";

const PRODUCTS = "PRODUCTS"
const SET_PRODUCT = 'SET_PRODUCT';

let initialState = {
products:[
]
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {

/*        case PRODUCTS:
            return {


                ...state,
                products: state.products,

            }*/
        case SET_PRODUCT: {
            console.log(action)

            return {

                ...state,
                products: action.products,

            }
        }
        default:
            return state;

    }
}
export const setUserProfile = (profile) => ({type: PRODUCTS, profile})
export const setProduct = (products) => ({type: SET_PRODUCT, products})

export const getProductThunk = () => {
    return (dispatch) => {
        usersAPI.getUsers().then(data => {
            dispatch(setProduct(data));
        });
    }
}
export const getUserProfile = (userId) => (dispatch) => {
    debugger
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export default productsReducer;