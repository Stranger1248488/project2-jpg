import { useState, useEffect, createContext, useContext, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch.js";
import MainMenu from "./pages/MainMenu.jsx";
import StoryLoading from "./pages/StoryModeLoading.jsx";
import SettingsBlock from "./pages/SettingsPage.jsx";
import QuitBlock from "./pages/Desktop.jsx";
import styled from "styled-components";
import "./App.css";

export const AudioContext = createContext();

let randomBackground = Math.floor(Math.random() * 6) + 1;
const MenuButton = styled.p`
  font-family: helvetica;
  font-size: 24px;
`;

function App() {
  const [data, loading, error] = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=9",
  );
  const [background, setBackground] = useState(randomBackground);
  const audioRef = useRef(null);
  const clickySound = new Audio("/images/UIAssets/menuSound.wav");

  return (
    <AudioContext.Provider value={{ audioRef, clickySound }}>
      <audio ref={audioRef} autoPlay muted loop>
        <source src="/images/UIAssets/menuMusic.wav" type="audio/mpeg" />
      </audio>
      <div>
        <img
          src={`/images/Backgrounds/med/bg${background}.png`}
          alt="background"
          id="background"
        />
      </div>
      <img src="/images/logo/GTAPokeLogo.png" alt="GTAPokeLogo" id="GPALogo" />
      <div id="menu-background">
        <div id="pokemon-icon">
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
          {data && <img src={data} alt="Pokemon" />}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/settings" element={<SettingsBlock />} />
        <Route path="/storymode" element={<StoryLoading />} />
        <Route path="/quit" element={<QuitBlock />} />
      </Routes>
    </AudioContext.Provider>
  );
}

export default App;
