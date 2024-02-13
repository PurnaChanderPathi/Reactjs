import React, { useState } from 'react'
import UseCounter from './UseCounter';
import ScreenComponent from './ScreenComponent';
import UseScreen from './UseScreen';

const CustomHooks = () => {
    const [counter, increment, decrement, reset] = UseCounter(0);
  return (
    <div>
      <h1>Custom Hooks</h1>
      <h2>{counter}</h2>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Reset</button>
        <ScreenComponent />

      </div>
    </div>
  )
}

export default CustomHooks
