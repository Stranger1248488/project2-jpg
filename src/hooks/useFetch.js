import { useState, useEffect } from "react";

export function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchImg() {
    setLoading(true);

    if (options === "load") {
      let randomPoke = Math.floor(Math.random() * 151);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          fetch(data.results[randomPoke].url)
            .then((response) => response.json())
            .then((data) => {
              setData(data.sprites.other["official-artwork"].front_default);
              setLoading(false);
            });
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    } else {
      let randomIndex = Math.floor(Math.random() * 9);

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          fetch(data.results[randomIndex].url)
            .then((response) => response.json())
            .then((data) => {
              setData(data.sprites.other.dream_world.front_default);
              setLoading(false);
            });
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }

  useEffect(() => {
    fetchImg();
  }, []);

  return [data, loading, error, fetchImg];
}
