import React from 'react'
import UseScreen from './UseScreen';

const ScreenComponent = () => {
    const screenSize = UseScreen();
  return (
    <div>
      <h1>Screen Component</h1>
      <h2>we are in {screenSize} Screen</h2>
    </div>
  )
}

export default ScreenComponent
