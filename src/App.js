// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react'
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'
import WebcamStreamCapture from './WebcamStreamCapture'

function App() {
  const [state,setState] = useState(1)

  return (
    <div className="App">
      <header className="App-header">        
        { state ? 
        
          <div width='100px' height='100px'>
            <button style={{color:"red"}} onClick={()=> setState(0)} type="button">Talk to Bot</button>
          </div>

          :

          <div>
            <div className="doc">
              <img src="doc.jpg" width="550px"></img>
            </div>
            <WebcamStreamCapture />
            
          </div>
        }
      </header>
      
    </div>
  );
}

export default App;
