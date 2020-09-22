import React, { useState } from "react";
import { Link } from "react-router-dom";

// TODO: redo styles to recenter buttons
const containerStyle = {
  fontSize: "50px",
  textAlign: "center",
  margin: "auto",
};

const generateStyles = (control) => {
  return {
    color: "#ccdded",
    textDecoration: "none",
    padding: "18px",
    marginRight: "15%",
    backgroundColor: control ? "#171621" : "#3a3b61",
    userSelect: "none",
  };
};

export default function LandingPageButtons() {
  const [defaultCardsHover, setDefaultCardsHover] = useState(false);
  const [gameIdHover, setGameIdHover] = useState(false);

  return (
    <div style={containerStyle}>
      <Link
        to="/clashIdInput"
        style={generateStyles(gameIdHover)}
        onMouseEnter={() => setGameIdHover(true)}
        onMouseLeave={() => setGameIdHover(false)}
      >
        Use Clash Royale ID
      </Link>

      <Link
        to="/drafter"
        style={generateStyles(defaultCardsHover)}
        onMouseEnter={() => setDefaultCardsHover(true)}
        onMouseLeave={() => setDefaultCardsHover(false)}
      >
        Choose Default Cards
      </Link>
    </div>
  );
}
