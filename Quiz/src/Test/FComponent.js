import { ControlCamera } from '@mui/icons-material';
import React, { useContext } from 'react'
import { CounterContext } from './CounterContext';

function FComponent() {
    const {counter, setCounter} = useContext(CounterContext);
  return (
    <div>
        <h1>Functional Component</h1>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>

        <hr></hr>
        <Fchild />
    </div>
  );
}

const Fchild = () => {
    const {counter, setCounter} = useContext(CounterContext);

    return (
        <div>
            <h1>Functional Child Component</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>


        </div>
    )
}

export default FComponent