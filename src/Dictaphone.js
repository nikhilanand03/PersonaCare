import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import React, { useState, useEffect } from 'react';
import './App.css';
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'
import WebcamStreamCapture from './WebcamStreamCapture'

const Dictaphone = (props) => {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <button onClick={() => { SpeechRecognition.startListening(); props.startCapture(); console.log("Start capture")}} className="button">
        <div className="siri">
            {listening ? <img src = "apple_siri.gif" height="100px"/> : <img src = "static_siri.png" height="100px" onLoad={()=>{if(props.capturing) props.stopCapture();}}/>}
        </div>
      </button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;