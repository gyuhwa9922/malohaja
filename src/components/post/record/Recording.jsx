import React, { useEffect, useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { AudioOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Recording = ({ recordUrl, setrecordUrl }) => {
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setrecordUrl(url);
    console.log(blob, url, recordUrl);
    // document.body.appendChild(audio);
  };
  useEffect(() => {
    console.log(recordUrl);
    return () => {
      // console.log("unmount");
      recorderControls.stopRecording();
    };
  }, [recordUrl]);
  return (
    <>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        // downloadOnSavePress={true}
        // downloadFileExtension="mp3"
        downloadFileExtension="mp3"
        showVisualizer={true}
      />
      <Button
        icon={<AudioOutlined />}
        onClick={recorderControls.startRecording}
        loading={recorderControls.isRecording}
        disabled={recorderControls.isRecording}
      >
        {!recordUrl ? "녹음" : "재녹음"}
      </Button>
      <Button
        icon={<AudioOutlined />}
        onClick={recorderControls.togglePauseResume}
      >
        중단
      </Button>
      <Button
        onClick={recorderControls.stopRecording}
        disabled={!recorderControls.isRecording}
      >
        완료
      </Button>
      {recordUrl && (
        <>
          <audio src={recordUrl} controls />
          <Button onClick={() => setrecordUrl()}>x</Button>
        </>
      )}
    </>
  );
};

export default Recording;
