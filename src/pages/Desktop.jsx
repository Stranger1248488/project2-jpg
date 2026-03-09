import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function QuitBlock() {
  const GPABody = styled.h3`
    font-family: helvetica;
  `;

  return (
    <>
      <div className="blackBackground"></div>
      <div id="settingsSave">
        <div className="settingsHead">
          <img
            src="/images/UIAssets/quit.png"
            alt="quit"
            className="quitIcon"
          />
        </div>
        <div className="settingsBody">
          <GPABody>
            Are you sure you want to quit Grand Poke Auto? Any unsaved progress
            will be lost.
          </GPABody>
        </div>
        <div className="decisionBlock">
          <Link to="/">
            <div className="decisionBtn">
              <p>No</p>
            </div>
          </Link>
          <div className="decisionBtn" onClick={() => window.close()}>
            <p>Yes</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuitBlock;
