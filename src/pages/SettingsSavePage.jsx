import { useState, useEffect } from "react";
import styled from "styled-components";

function SettingsBlock() {
  const GPAHeader = styled.h1`
    font-family: "Comic Sans MS", "Comic Sans", cursive, sans-serif;
  `;
  const GPABody = styled.h3`
    font-family: helvetica;
  `;

  return (
    <>
      <div id="settingsSave">
        <div className="settingsHead">
          <GPAHeader>ALERT</GPAHeader>
        </div>
        <div className="settingsBody">
          <GPABody>
            You made changes but did not apply them. Would you like to apply
            them now? Selecting "No" will restore this menu to the last applied
            settings.
          </GPABody>
        </div>
        <div className="decisionBlock">
          <div>
            <p>No</p>
          </div>
          <div>
            <p>Cancel</p>
          </div>
          <div>
            <p>Yes</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingsBlock;
