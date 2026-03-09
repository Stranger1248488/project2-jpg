import { useState, useEffect, useContext } from "react";
import { AudioContext } from "../App.jsx";
import { Link } from "react-router-dom";
import "./CSS/SettingsPage.css";

function SettingsBlock() {
  const [selectedSetting, setSelectedSetting] = useState("graphics");
  const [graphics, setGraphics] = useState("medium");
  const { audioRef, clickySound } = useContext(AudioContext);

  function handleSettingClick(setting) {
    setSelectedSetting(setting);
    clickySound.play();
  }

  return (
    <>
      <div id="settingsBlock">
        <div id="settingsHeader">
          <div className="tinyGreenLine"> </div>
          <h3>SETTINGS</h3>
        </div>
        <div id="settingsSidebar">
          <div
            className={`settingsBtn ${selectedSetting === "graphics" ? "active" : ""}`}
            onClick={() => handleSettingClick("graphics")}
          >
            <h3>Graphics</h3>
          </div>
          <div
            className={`settingsBtn ${selectedSetting === "notifications" ? "active" : ""}`}
            onClick={() => handleSettingClick("notifications")}
          >
            <h3>Notifications</h3>
          </div>
        </div>
        <div id="settingsPanel">
          {selectedSetting === "graphics" && (
            <div>
              <h3>Graphics Settings</h3>
              <p>Current Quality: {graphics}</p>
              <button
                onClick={() => {
                  setGraphics("low");
                  clickySound.play();
                }}
              >
                Low
              </button>
              <button
                onClick={() => {
                  setGraphics("medium");
                  clickySound.play();
                }}
              >
                Medium
              </button>
              <button
                onClick={() => {
                  setGraphics("high");
                  clickySound.play();
                }}
              >
                High
              </button>
            </div>
          )}
          {selectedSetting === "notifications" && (
            <div>
              <h3>Notification Settings</h3>
              <p>Manage your notification preferences here.</p>
            </div>
          )}
        </div>
      </div>
      <div className="decisionBlock">
        <Link to="/">
          <div className="decisionBtn" onClick={() => clickySound.play()}>
            <p>Back</p>
          </div>
        </Link>
        <div className="decisionBtn" onClick={() => clickySound.play()}>
          <p>Save</p>
        </div>
      </div>
    </>
  );
}

export default SettingsBlock;
