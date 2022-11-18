import React from "react";
import {usersAPI} from "../api/api";


const SET_PRODUCT = 'SET_PRODUCT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    products: [],
    profile: {}
}

const productsReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {

        case SET_USER_PROFILE: {
            debugger
            return {...state, profile: action.profile}
        }

        case SET_PRODUCT: {

            return {

                ...state,
                products: action.products,

            }
        }
        default:
            return state;

    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProduct = (products) => ({type: SET_PRODUCT, products})

export const getProductThunk = () => {
    return (dispatch) => {
        usersAPI.getUsers().then(data => {
            dispatch(setProduct(data));
        });
    }
}
export const getUserProfile = (userId) => (dispatch) => {
    console.log(userId)
    usersAPI.getProfile(userId).then(response => {

        dispatch(setUserProfile(response.data));
    });
}

export default productsReducer;