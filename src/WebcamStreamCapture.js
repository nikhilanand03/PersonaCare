import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import React from 'react'
import './App.css';
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'
import Webcam from "react-webcam";
import Dictaphone from "./Dictaphone";

const WebcamStreamCapture = () => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <>
      <Webcam audio={false} ref={webcamRef} className="webcam" />
      {capturing ? (
        <button onClick={()=>{handleStopCaptureClick(); if(recordedChunks.length > 0) handleDownload()}} className="button">
            <img src="static_siri.png" height="30px"/>
        </button>
      ) : (
        <button className="button">
            <img src="static_siri.png" height="30px"/>
        </button>
      )}
      <Dictaphone startCapture={handleStartCaptureClick} stopCapture={handleStopCaptureClick} capturing={capturing}/>
      {/* {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )} */}
    </>
  );
};

export default WebcamStreamCapture;