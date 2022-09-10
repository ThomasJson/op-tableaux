import React from "react";
import HomeScreen from "../homeScreen/HomeScreen";
import "./baseScreen.scss";

const baseScreen = () => {
  return (
    <div>
      <header>
        <h1>Hello Tableaux</h1>
      </header>
      <HomeScreen />
      <footer>
        <h2>Mon super Pied</h2>
      </footer>
    </div>
  );
};

export default baseScreen;
