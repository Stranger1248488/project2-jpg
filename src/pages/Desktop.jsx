import { useState, useEffect, useContext } from "react";
import { AudioContext } from "../App.jsx";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./CSS/Desktop.css";
const GPABody = styled.h3`
  font-family: helvetica;
  border-top: 3px solid white;
  border-bottom: 3px solid white;
`;

function QuitBlock() {
  const { audioRef, clickySound } = useContext(AudioContext);

  return (
    <>
      <div className="blackBackground"> </div>
      <div id="quitBlock">
        <img src="/images/UIAssets/quit.png" alt="quit" className="quitIcon" />
        <div className="settingsBody">
          <GPABody>
            Are you sure you want to quit Grand Poke Auto? Any unsaved progress
            will be lost.
          </GPABody>
        </div>
      </div>
      <div className="decisionBlock">
        <Link to="/">
          <div className="decisionBtn" onClick={() => clickySound.play()}>
            <p>No</p>
          </div>
        </Link>
        <div
          className="decisionBtn"
          onClick={() => {
            clickySound.play();
          }}
          onClick={() => {
            setTimeout(() => {
              alert(
                "Sounds gouda to me, have safe life best of luck out there.",
              );
            }, 1);
            setTimeout(() => {
              alert(
                "whatcha still doin here? You are free, c'mon scamper, be free and live your life",
              );
            }, 5000);
          }}
        >
          <p>Yes</p>
        </div>
      </div>
    </>
  );
}

export default QuitBlock;
