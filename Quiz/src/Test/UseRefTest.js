import { Button } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react'

function Test() {

    // 1. DOM reference 
    // 2. useRef for storing the previous state
    // 3. hold mutable value prevent re-render of component

    const [name, setName] = useState('');
    const [counter, setCounter] = useState(0);

    const inputEl = useRef('');
    const previousCounterRFef = useRef('0');
    console.log(inputEl);
    const resetInput = () => {
        setName("");
        inputEl.current.focus();
        console.log(inputEl.current.value);
        inputEl.current.value = 'Chandu';
    };

    useEffect(() => {
        previousCounterRFef.current = counter;
    },[counter])

    return (

        <div className='App'>
            <div>
                <input
                    ref={inputEl}
                    name='name'
                    autoComplete='off'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <Button onClick={resetInput}>Reset</Button>
            </div>
            <div>My name is {name}</div>
            <div>
                <h1>Random Counter {counter}</h1>
                {typeof previousCounterRFef.current !== "undefined" && (
                    <h2>Previous Counter : {previousCounterRFef.current}</h2>
                )}
            </div>
            <Button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))} >Generate</Button>
        </div>
    )
}

export default Test