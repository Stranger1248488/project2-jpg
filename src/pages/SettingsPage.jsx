import { useState, useEffect, useContext } from "react";
import { AudioContext } from "../App.jsx";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/SettingsPage.css";
let trackedChange = false;

function SettingsBlock() {
  const [selectedSetting, setSelectedSetting] = useState("graphics");
  const [graphicsCache, setGraphicsCache] = useState(null);
  const [graphics, setGraphics] = useState("medium");
  const { audioRef, clickySound } = useContext(AudioContext);
  let navigate = useNavigate();

  function handleSettingClick(setting) {
    setSelectedSetting(setting);
    clickySound.play();
  }
  function changeGraphics(quality) {
    setGraphicsCache(quality);
    if (graphics !== quality) {
      console.log("change made");
      trackedChange = true;
    }
    clickySound.play();
  }

  function exitSettings() {
    clickySound.play();
    if (trackedChange && graphics !== graphicsCache) {
      navigate("/settings/alert");
      trackedChange = false;
    } else {
      navigate("/");
    }
  }

  function saveSettings() {
    clickySound.play();
    if (trackedChange && graphics !== graphicsCache) {
      // save process here
      navigate("/settings/save");
      trackedChange = false;
    }
  }

  console.log("status of trackedChange: ", trackedChange);

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
              <p>Selected Quality: {graphicsCache}</p>
              <button
                onClick={() => {
                  changeGraphics("low");
                }}
              >
                Low
              </button>
              <button
                onClick={() => {
                  changeGraphics("medium");
                }}
              >
                Medium
              </button>
              <button
                onClick={() => {
                  changeGraphics("high");
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
        <div className="decisionBtn" onClick={() => exitSettings()}>
          <p>Back</p>
        </div>
        <div className="decisionBtn" onClick={() => saveSettings()}>
          <p>Save</p>
        </div>
      </div>
    </>
  );
}

export default SettingsBlock;
