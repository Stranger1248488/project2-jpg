import { useState, useEffect, useContext } from "react";
import { AudioContext } from "../App.jsx";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./CSS/Desktop.css";
const GPABody = styled.h3`
  font-family: helvetica;
  border-top: 3px solid white;
  border-bottom: 3px solid white;
`;

function SettingsAlert() {
  const { audioRef, clickySound } = useContext(AudioContext);

  return (
    <>
      <div className="blackBackground"> </div>
      <div id="quitBlock">
        <img src="/images/UIAssets/alert.png" alt="save" className="quitIcon" />
        <div className="settingsBody">
          <GPABody>
            You made changes but did not apply them. Would you like to apply
            them now? Selecting "No" will restore this menu to the last applied
            settings.
          </GPABody>
        </div>
      </div>
      <div className="decisionBlock">
        <Link to="/settings">
          <div className="decisionBtn" onClick={() => clickySound.play()}>
            <p>No</p>
          </div>
        </Link>
        <Link to="/settings/save">
          <div
            className="decisionBtn"
            onClick={() => {
              clickySound.play();
            }}
          >
            <p>Yes</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SettingsAlert;
