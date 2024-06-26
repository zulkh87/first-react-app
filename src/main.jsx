import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import Greeting from "./Greeting.jsx";
import Quote from "./AddQuote.jsx";
import Todo from "./AddStuff.jsx";
import AddAnimals from "./AddList.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greeting />
    <Quote />
    <Todo />
    <AddAnimals />
  </React.StrictMode>
);

// React components must be capitalized or they will not function as expected, which is why we capitalized Greeting()
