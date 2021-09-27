import React from "react";
import "./styles.css";
import { useState } from "react";

const movies = {
  action: [
    {
      name: "The bourne ultimatum",
      year: "2007",
      imdbScore: "8.0",
      actor: "Matt damon"
    },
    {
      name: "Taken ",
      year: "2008",
      imdbScore: "7.8",
      actor: "Liam neeson"
    },
    {
      name: "John Wick",
      year: "2014",
      imdbScore: "7.4",
      actor: "Keanu reaves"
    }
  ],

  SciFi: [
    {
      name: "Predestination",
      year: "2014",
      imdbScore: "7.5",
      actor: "Ethan hawke"
    },
    {
      name: "Interstellar",
      year: "2014",
      imdbScore: "8.6",
      actor: "Matthew mcConaughey,Anna hathaway"
    },
    {
      name: "Inception",
      year: "2010",
      imdbScore: "8.",
      actor: "leo"
    }
  ],
  adventureMystery: [
    {
      name: "Pirates of the carribean 1",
      year: "2003",
      imdbScore: "8.0",
      actor: "Johnny depp,Orlando bloom"
    },
    {
      name: "Knives out",
      year: "2019",
      imdbScore: "7.9",
      actor: "Chris evans,Daniel craig"
    },
    {
      name: "joker",
      year: "2019",
      imdbScore: "8.4",
      actor: "joaquin phoenix"
    }
  ],
  comedy: [
    {
      name: "The hangover",
      year: "2009",
      imdbScore: "7.7",
      actor: "bradley cooper"
    },
    {
      name: "ted",
      year: "2012",
      imdbScore: "6.9",
      actor: "mark wahlberg"
    },
    {
      name: "vacation",
      year: "2016",
      imdbScore: "6.9",
      actor: "ed helmes"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> movie recommendor </h1>
      <p style={{ fontSize: "medium" }}>
        Checkout my favorite movies. select genre to get started
      </p>
      <div>
        {Object.keys(movies).map((genre) => {
          return (
            <button className="btn" onClick={() => genreClickHandler(genre)}>
              {" "}
              {genre}{" "}
            </button>
          );
        })}
      </div>
      <div className="linebreak"></div>
      <div className="showGenre">{selectedGenre}</div>
      <div classstyle={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movies[selectedGenre].map((movies) => (
            <li className="card" key={movies.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {movies.name} </div>
              <div style={{ fontSize: "11px" }}> YEAR: {movies.year} </div>
              <div style={{ fontSize: "11px" }}> IMDB: {movies.imdbScore} </div>
              <div style={{ fontSize: "11px" }}> ACTOR: {movies.actor} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
