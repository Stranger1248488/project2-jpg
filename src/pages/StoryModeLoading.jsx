import { useState, useEffect } from "react";

function StoryLoading() {
  const { pokemonToDisplay, setPokemonToDisplay } = useState(null);
  const { background, setBackground } = useState(null);

  return (
    <>
      <div id="storyLoading">
        <img src={pokemon} alt="Loading..." />
      </div>
    </>
  );
}

export default StoryLoading;
