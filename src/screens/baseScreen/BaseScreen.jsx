import React from "react";
import HomeScreen from "../homeScreen/HomeScreen";
import "./baseScreen.scss";

const baseScreen = () => {
  return (
    <div>
      <header>
        <h1>My Big Brain</h1>
      </header>
      <HomeScreen />
      <footer>
        <h2>A Sexy Foot</h2>
      </footer>
    </div>
  );
};

export default baseScreen;
