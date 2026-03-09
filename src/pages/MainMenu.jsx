import { useState, useEffect, createContext, useContext } from "react";
import { AudioContext } from "../App.jsx";
import { Routes, Route } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import { Link } from "react-router-dom";
import "./CSS/MainMenu.css";
import SettingsBlock from "./SettingsPage.jsx";
import styled from "styled-components";
import MenuBlock from "../resources/elements/MenuBlock.jsx";

// export const Context = createContext();

let randomBackground = Math.floor(Math.random() * 6) + 1;
const MenuButton = styled.p`
  font-family: helvetica;
  font-size: 24px;
`;

function MainMenu() {
  const [data, loading, error] = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=9",
  );
  const [background, setBackground] = useState(randomBackground);
  const { audioRef, clickySound } = useContext(AudioContext);

  return (
    <>
      <div id="menu-layout">
        <div id="mainMenuBlock">
          <div id="menu-sponsor-block">
            <MenuBlock />
          </div>
          <div id="button-location">
            <Link to="/quit">
              <MenuButton
                className="menuBtn"
                onClick={() => clickySound.play()}
              >
                QUIT
              </MenuButton>
            </Link>
            <Link to="/settings">
              <MenuButton
                className="menuBtn"
                onClick={() => clickySound.play()}
              >
                SETTINGS
              </MenuButton>
            </Link>
            <MenuButton
              className="menuBtn"
              onClick={() => {
                audioRef.current.muted = !audioRef.current.muted;
                audioRef.current.volume = 0.6;
                clickySound.play();
              }}
            >
              2X GPA$ & XP ON GYM BATTLES
            </MenuButton>
            <MenuButton className="menuBtn" onClick={() => clickySound.play()}>
              ONLINE
            </MenuButton>
            <Link to="/storymode">
              <MenuButton
                className="menuBtn"
                onClick={() => clickySound.play()}
              >
                STORY MODE
              </MenuButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
