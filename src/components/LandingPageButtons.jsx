import React, { useState } from "react";
import { Box } from "grommet";

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

const rowStyles = {
  paddingTop: "10vh",
};

export default function LandingPageButtons() {
  const [defaultCardsHover, setDefaultCardsHover] = useState(false);
  const [gameIdHover, setGameIdHover] = useState(false);

  return (
    <Box animation={boxAnimation} align="middle" style={boxStyles}>
      <div style={{ paddingBottom: "4vh", paddingTop: "8vh" }}>
        <span
          style={{
            padding: "18px",
            marginRight: "15%",
            backgroundColor: gameIdHover ? "#171621" : "#3a3b61",
            boxShadow: "20px 20px 50px 10px #000000;",
          }}
          onMouseEnter={() => setGameIdHover(true)}
          onMouseLeave={() => setGameIdHover(false)}
        >
          Use Clash Royale ID
        </span>
        <span
          style={{
            padding: "18px",
            backgroundColor: defaultCardsHover ? "#171621" : "#3a3b61",
            boxShadow: "20px 20px 50px 10px #000000;",
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
