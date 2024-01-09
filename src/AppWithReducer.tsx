import React, {useReducer, useState} from 'react';
import './Components/AppWithRedux.module.css';
import {SuperButton} from "./Components/SuperButton";
import {counterReducer, minusAc, plusAc} from "./Reducer/CounterReducer";

function AppWithReducer() {

    const [state, dispatch] = useReducer(counterReducer, {count: 0});
    const {count} = state

    const callbackPlus = () => {
        // dispatch(plusAc())
    }
    const callbackMinus = () => {
        // dispatch(minusAc())
    }
    return (
        <>
            <SuperButton callback={callbackPlus} name={'Plus'}/>
            <SuperButton callback={callbackMinus} name={'Minus'}/>
            <span>{count}</span>
        </>
    );
}

export default AppWithReducer;
