import { useState, useEffect, useContext } from "react";
import { AudioContext } from "../App.jsx";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./CSS/SettingsSavePage.css";
const GPABody = styled.h3`
  font-family: helvetica;
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;
const CountElement = styled.p`
  color: rgb(192, 164, 3);
`;

function SettingsSavePage() {
  const { audioRef, clickySound } = useContext(AudioContext);
  const [countdown, setCountdown] = useState(15);
  let navigate = useNavigate();
  function timerDown() {
    setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
    if (countdown === 0) {
      //revert settings here
      navigate("/settings");
    }
  }
  useEffect(() => {
    timerDown();
  }, [countdown]);

  return (
    <>
      <div className="blackBackground"> </div>
      <div id="quitBlock">
        <img
          src="/images/UIAssets/keepSet.png"
          alt="save"
          className="SaveIcon"
        />
        <div className="settingsBody saveOnly">
          <GPABody>
            Will revert to old settings in{" "}
            <CountElement>{countdown}</CountElement> seconds...
          </GPABody>
        </div>
      </div>
      <div className="decisionBlock">
        <Link to="/settings">
          <div className="decisionBtn" onClick={() => clickySound.play()}>
            <p>No</p>
          </div>
        </Link>
        <div
          className="decisionBtn"
          onClick={() => {
            clickySound.play();
          }}
        >
          <p>Yes</p>
        </div>
      </div>
    </>
  );
}

export default SettingsSavePage;
