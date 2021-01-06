import React, { useState } from 'react';
import PortalDemo from './PortalDemo';
import './App.css';

function App() {
  const [ok , setOk] = useState(false);
  return (
    <div className="App">
      <div className = "container">
        <button onClick = { () => setOk(true)}>Click Me !</button>
      </div>
      {ok ? <PortalDemo onClose = {() => setOk(false)} /> : null}
    </div>
  );
}

export default App;
