import React, { useState } from 'react'
import FComponent from './FComponent';
import CComponent from './CComponent';
import { CounterContext } from './CounterContext';

function UseContext() {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter  + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };
    
    return (
        <div className='App border'>
        <h1>
            App Component
        </h1>
        <h2>{counter}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        <hr></hr>
        <CounterContext.Provider value = {{counter, setCounter}}>
        <FComponent />
        <hr></hr>
        {/* <CComponent /> */}
        </CounterContext.Provider>
    </div>
    );
};

export default UseContext