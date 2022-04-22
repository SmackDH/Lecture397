//It should display 2 paragraph HTML elements.
//Create a react app from scratch.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const currentyear = new Date().getFullYear();
const name = "Suwon";

ReactDOM.render(
  <div>
    <h1>Created for {name}!</h1>
    <p>Copyright {currentyear} </p>
  </div>,
  document.getElementById("root")
);
