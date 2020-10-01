import React from "react";

import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

import RandomCat from "./components/RandomCat/RandomCat";
//import Bored from "./components/Bored/Bored";
//import Coiffure from "./components/Coiffure/Coiffure";
// import Jokes from "./components/Jokes/Jokes";
import Todos from "./components/Todos/Todos";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <header id="appHeader">
        {/* <h1 id="appTitle">The internet</h1> */}
        <img src={process.env.PUBLIC_URL + "img/ban.jpg"} alt="The Internet" />
      </header>
      <div className="container">
        <div className="main-grid">
          <RandomCat />
          {/* <Bored /> */}
          {/* <Coiffure /> */}
          {/* <Jokes /> */}
          <Todos />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
