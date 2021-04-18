import React from "react";
import { directors } from "../data";

function Directors() {
  const directorObj = directors.map((dir) => (
    <div key={dir.name}>
      <h2>{dir.name}</h2>
      <ul>
        {dir.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return (
  <>
    <h1>Directors Page</h1>
    <div>
      {directorObj}
    </div>
  </>
  )};

export default Directors;
