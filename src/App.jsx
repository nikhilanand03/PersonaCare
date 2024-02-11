import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import Upload from './components/Upload.jsx'
import './style.scss';
import { useState } from 'react';
import React from 'react'
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'
import WebcamStreamCapture from './WebcamStreamCapture'


function App() {
  // const [home, setHome] = useState(0);
  const [state,setState] = useState(1)
    return (

      <div className='app'>
        
        { state ? 
        <div>
        <Header />
        <div className='content'>
          <HomePage />
          <Upload />
        </div>
        <div width='100px' height='100px'>
          <button style={{color:"red"}} onClick={()=> setState(0)} type="button" className="bigButton"> Consult a Bot! </button>
        </div>
        </div>
        :
        <div className="container">
          <div className="backContainer">
            <a href="default.asp"><img src="back.webp" className="back"/></a>
          </div>
          <div>
            <div className="doc">
              <img src="doc.jpg" width="550px"></img>
            </div>
            <WebcamStreamCapture />
            
          </div>
        </div>
      }
      
    </div>
    )
  }

export default App;
