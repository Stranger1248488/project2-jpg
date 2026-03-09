import { useState, useEffect, createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch.js";
import MainMenu from "./pages/MainMenu.jsx";
import SettingsBlock from "./pages/SettingsPage.jsx";
import styled from "styled-components";
import "./App.css";

export const Context = createContext();

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

  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
