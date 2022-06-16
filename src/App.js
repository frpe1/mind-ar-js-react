import React, { useState } from 'react';

// STEG 0 ) Beroende på vad du vill göra, tracka bild eller facetracking etc
// behöv du inkludera dessa komponenter som finns med i MindAR frameworket. 
// Nedan visar uppsättning för Example1 dvs tracking av bild
//import 'mind-ar/dist/mindar-image.prod.js';
//import 'aframe';
//import 'mind-ar/dist/mindar-image-aframe.prod.js';
// ...och dessa används för 
import 'mind-ar/dist/mindar-face.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-face-aframe.prod.js';

import './App.css';

// STEG 1 ) Här inkluderar vi Example1.js komponenten som gör det möjligt med AR via "Mind-AR"
// OBS använd bara ett exempel i taget och studera detta för att förstå vad de gör och hur de används
//import MindARViewer from './Example1';
import MindARViewer from './Example2';

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
