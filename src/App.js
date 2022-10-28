import "./styles.css";
import React, { useState } from "react";

// If you are here, please tell me how to get this look okay on mobile devices. Currently, it loads zoomed in.
export default function App() {
  var animeObject = {
    adventure: [
      { name: "one piece", rating: "9/10" },
      { name: "demon slayer", rating: "8.5/10" }
    ],
    fantasy: [
      { name: "overlord", rating: "7/10" },
      { name: "jojo's bizarre adventures", rating: "7.5/10" }
    ],
    supernatural: [
      { name: "your name", rating: "9.5/10" },
      { name: "one punch man", rating: "9/10" }
    ]
  };

  var [selectedGenre, setGenre] = useState("supernatural");

  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      {/* <span className="header" role="img" aria-label="unicorn">
        🦄 karan's anime recommendation{" "}
      </span> */}
      <div className="headerdiv">
        <h1 className="header">
          <span role="img" aria-label="unicorn">
            🦄
          </span>{" "}
          karan's anime recommendation{" "}
        </h1>
      </div>

      <p style={{ padding: "2rem 0 0", whitespace: "nowrap" }}>
        Check out my anime recommendations. Select a genre to get started!
      </p>
      <br></br>
      <div className="genreContainer">
        {Object.keys(animeObject).map((genre) => (
          <button
            key={genre}
            className="genreList"
            onClick={() => genreClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {animeObject[selectedGenre].map((anime) => (
            <li className="animeList" key={anime.name}>
              <div className="animeName">{anime.name}</div>
              <div className="animeRating">{anime.rating}</div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul></ul>
      </div>
    </div>
  );
}
