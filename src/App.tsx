import React, {useState} from 'react';
import './Components/AppWithRedux.module.css';
import {SuperButton} from "./Components/SuperButton";

function App() {
    const [value, setValue] = useState(0)
    const callbackPlus = () => {
        setValue(value + 1)
    }
    const callbackMinus = () => {
        setValue(value - 1)
    }
    return (
        <>
            <SuperButton callback={callbackPlus} name={'Plus'}/>
            <SuperButton callback={callbackMinus} name={'Minus'}/>
            <span>{value}</span>
        </>
    );
}

export default App;
