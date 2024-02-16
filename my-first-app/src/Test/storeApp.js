import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    balance : 0,
    name : "",
    mobile : null,
}

function accountReducer(state=initialState , action) {
    switch(action.type)
    {
     case "deposite":
    return {...state, balance: state.balance + action.payload };
    case "withdraw":
    return {...state, balance:state.balance-action.payload };
    case "mobileUpdate":
    return {...state, mobile: action.payload };
    case "userUpdate":
    return {...state, name: action.payload };
    default:
    return state
    }
}

const storeApp = configureStore(accountReducer);

// console.log(storeApp.getState());
// storeApp.dispatch({type:'deposite',payload:500})
// console.log(storeApp.getState());
// storeApp.dispatch({type:'withdraw',payload:300})
// console.log(storeApp.getState());
// storeApp.dispatch({type:'userUpdate',payload:"pathi"})
// console.log(storeApp.getState());
// storeApp.dispatch({type:'mobileUpdate',payload:8801234567})
// console.log(storeApp.getState());

export default storeApp;