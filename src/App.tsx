import React from 'react';
import { Calculator } from './calculator';

const containerStyle: React.CSSProperties = {
  maxWidth: '450px',
  border: '1px solid black',
  margin: 'auto'  
}

function App() {
  return (
    <div style={containerStyle}>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
