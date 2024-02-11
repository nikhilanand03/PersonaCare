import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import Upload from './components/Upload.jsx'
import './style.scss';
import { useState } from 'react';
import React from 'react'
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'
import WebcamStreamCapture from './WebcamStreamCapture'
import { useState } from 'react';

function App() {
  // const [home, setHome] = useState(0);
  const [state,setState] = useState(1)
    return (
      <div className='app'>
        <Header />
      <div className='content'>
        <HomePage />
        <Upload />
        { state ? 
        
        <div width='100px' height='100px'>
          <button style={{color:"red"}} onClick={()=> setState(0)} type="button"> Talk to Bot </button>
        </div>

        :

        <div>
          <div className="doc">
            <img src="doc.jpg" width="550px"></img>
          </div>
          <WebcamStreamCapture />
          
        </div>
      }
      </div>
    </div>
    )
  }

export default App;
