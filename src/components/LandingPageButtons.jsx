import React, { useState } from "react";
import { Box } from "grommet";

import { Link } from "react-router-dom";

const boxStyles = {
  fontSize: "5vh",
  textAlign: "center",
  marginLeft: "100px",
  marginRight: "100px",
};
const boxAnimation = [
  {
    type: "pulse",
    size: "small",
  },
  {
    type: "slideDown",
    size: "xlarge",
  },
];

export default function LandingPageButtons() {
  const [defaultCardsHover, setDefaultCardsHover] = useState(false);
  const [gameIdHover, setGameIdHover] = useState(false);

  return (
    <Box animation={boxAnimation} style={boxStyles}>
      <div style={{ paddingBottom: "4vh", paddingTop: "8vh" }}>
        <Link
          to="/clashIdInput"
          style={{
            color: "#ccdded",
            textDecoration: "none",
            padding: "18px",
            marginRight: "15%",
            backgroundColor: gameIdHover ? "#171621" : "#3a3b61",
            userSelect: "none",
          }}
          onMouseEnter={() => setGameIdHover(true)}
          onMouseLeave={() => setGameIdHover(false)}
        >
          Use Clash Royale ID
        </Link>
        <span
          style={{
            padding: "18px",
            backgroundColor: defaultCardsHover ? "#171621" : "#3a3b61",
            userSelect: "none",
          }}
          onMouseEnter={() => setDefaultCardsHover(true)}
          onMouseLeave={() => setDefaultCardsHover(false)}
        >
          Choose Default Cards
        </span>
      </div>
    </Box>
  );
}
