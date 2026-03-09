import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import "./CSS/StoryModeLoading.css";

function StoryLoading() {
  // fetch random pokemon from pokeapi, and animate them in css. fade to black, then load new poke with diff background and repeat.
  // attach button to bottom of page to skip loading and go to main menu.
  const [data, loading, error, fetchImg] = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151",
    "load",
  );

  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * 36),
  );
  const [nosferatu, setNosferatu] = useState(false);
  const [visible, setVisible] = useState(false);

  const photoDump = {
    imgSrc: [
      "images/Backgrounds/loading/Load1.png",
      "images/Backgrounds/loading/Load2.png",
      "images/Backgrounds/loading/Load3.png",
      "images/Backgrounds/loading/Load4.png",
      "images/Backgrounds/loading/Load5.png",
      "images/Backgrounds/loading/Load6.png",
      "images/Backgrounds/loading/Load7.png",
      "images/Backgrounds/loading/Load8.png",
      "images/Backgrounds/loading/Load9.png",
      "images/Backgrounds/loading/Load10.png",
      "images/Backgrounds/loading/Load11.png",
      "images/Backgrounds/loading/Load12.png",
      "images/Backgrounds/loading/Load13.png",
      "images/Backgrounds/loading/Load14.png",
      "images/Backgrounds/loading/Load15.png",
      "images/Backgrounds/loading/Load16.png",
      "images/Backgrounds/loading/Load17.png",
      "images/Backgrounds/loading/Load18.png",
      "images/Backgrounds/loading/Load19.png",
      "images/Backgrounds/loading/Load20.png",
      "images/Backgrounds/loading/Load21.png",
      "images/Backgrounds/loading/Load22.png",
      "images/Backgrounds/loading/Load23.png",
      "images/Backgrounds/loading/Load24.png",
      "images/Backgrounds/loading/Load25.png",
      "images/Backgrounds/loading/Load26.png",
      "images/Backgrounds/loading/Load27.png",
      "images/Backgrounds/loading/Load28.png",
      "images/Backgrounds/loading/Load29.png",
      "images/Backgrounds/loading/Load30.png",
      "images/Backgrounds/loading/Load31.png",
      "images/Backgrounds/loading/Load32.png",
      "images/Backgrounds/loading/Load33.png",
      "images/Backgrounds/loading/Load34.png",
      "images/Backgrounds/loading/Load35.png",
      "images/Backgrounds/loading/Load36.png",
    ],
    imgAlt: [
      "Loading Screen 1",
      "Loading Screen 2",
      "Loading Screen 3",
      "Loading Screen 4",
      "Loading Screen 5",
      "Loading Screen 6",
      "Loading Screen 7",
      "Loading Screen 8",
      "Loading Screen 9",
      "Loading Screen 10",
      "Loading Screen 11",
      "Loading Screen 12",
      "Loading Screen 13",
      "Loading Screen 14",
      "Loading Screen 15",
      "Loading Screen 16",
      "Loading Screen 17",
      "Loading Screen 18",
      "Loading Screen 19",
      "Loading Screen 20",
      "Loading Screen 21",
      "Loading Screen 22",
      "Loading Screen 23",
      "Loading Screen 24",
      "Loading Screen 25",
      "Loading Screen 26",
      "Loading Screen 27",
      "Loading Screen 28",
      "Loading Screen 29",
      "Loading Screen 30",
      "Loading Screen 31",
      "Loading Screen 32",
      "Loading Screen 33",
      "Loading Screen 34",
      "Loading Screen 35",
      "Loading Screen 36",
    ],
  };

  useEffect(() => {
    setVisible(false);
    const changeContent = setTimeout(() => {
      fetchImg();
      setRandomIndex((index) => (index === 35 ? 0 : index + 1));
    }, 2000);
    let loopClean = setTimeout(() => {
      setNosferatu((torf) => !torf);
    }, 10000);
    return () => {
      clearTimeout(changeContent);
      clearTimeout(loopClean);
    };
  }, [nosferatu]);
  useEffect(() => {
    if (!loading) {
      let fadeIn = setTimeout(() => {
        setVisible(true);
      }, 500);
    }
  }, [loading]);

  return (
    <>
      <div id="blackScreen"></div>
      <div id="loadingOverlay">
        <img
          src={photoDump.imgSrc[randomIndex]}
          alt={photoDump.imgAlt[randomIndex]}
          id="storyModeLoading"
          className={visible ? "fade-in" : "fade-out"}
        />
        <div
          id="pokemon-load-icon"
          className={visible ? "fade-in" : "fade-out"}
        >
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
          {data && <img src={data} alt="Pokemon" />}
        </div>
        <div className="decisionBlock">
          <Link to="/">
            <div className="decisionBtn">
              <p>Return to menu</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default StoryLoading;
