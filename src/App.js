import React, { useState } from 'react';


import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import './App.css';

// STEG 1 ) Här inkluderar vi Example1.js komponenten som gör det möjligt med AR via "Mind-AR"
import MindARViewer from './Example1';

// STEG 2 ) Lägg sedan till i koden nedan följande tagg <MindARViewer/> för att accessa AR i koden

function App() {
  const [started, setStarted] = useState(false);
  return (
    <div className="App">
      <h1>Företagets logo här</h1>

      {started && (
        <div className="container">
          <MindARViewer/>
          <video></video>
        </div>
      )}

      <div>
        {!started && <button onClick={() => {setStarted(true)}}>Starta Tracking</button>}
        {started && <button onClick={() => {setStarted(false)}}>Stoppa Tracking</button>}
      </div>
      
    </div>
  );
}

export default App;
