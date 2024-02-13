import React, { useState, useMemo, useEffect, useCallback } from 'react'

function UseCallback() {
    // 1. optimize expensive operation
    // 2. Referental equality



    const [counter, setCounter] = useState(1);

    const result = useMemo(() => {
        return factorial(counter);
    },[counter])

    const [name, setName] = useState('');
    console.log("result", result)

    const displayName = useCallback((greeting) => {
        return greeting +" "+ name;
    },[name]);

  return (
    <div className='UseMemo'>
        <h1>
            Factorial of {counter} is: <span>{result}</span>
        </h1>
        <div>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
        <hr></hr>
        <div>
            <div>
                <label>Enter Name</label>
            </div>
            <input
                    type='text'
                    placeholder='enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                    <DisplayName displayName={displayName}></DisplayName>
                    
        </div>
    </div>
  );
}

function factorial(n) {
    let i = 0;
    while (i < 200000000) i++;
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const DisplayName = ({displayName}) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        setValue(displayName("Hello"));
        console.log("Component Rendered!!");
    },[displayName])
    return <p>{`My name is ${value}`}</p>
};

export default UseCallback