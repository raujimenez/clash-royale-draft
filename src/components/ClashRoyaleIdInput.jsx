import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Box, TextInput } from "grommet";
import { CaretPrevious, CaretNext } from "grommet-icons";

const boxStyles = {
  fontSize: "5vh",
  textAlign: "center",
  marginLeft: "100px",
  marginRight: "100px",
};

const boxAnimation = {
  type: "slideUp",
  size: "xlarge",
};

const secondTextAnimation = {
  type: "slideUp",
  size: "xlarge",
  delay: 100,
};

const buttonAnimation = {
  type: "fadeIn",
  size: "xlarge",
  delay: 1050,
};

const textInputStyle = {
  marginBottom: "3%",
  backgroundColor: "#171621",
  width: "50%",
};

export default function ClashRoyaleIdInput() {
  const [playerOneId, setPlayerOneId] = useState("");
  const [playerTwoId, setPlayerTwoId] = useState("");

  const [backHover, setBackHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);

  const caretStyle = (hover) => {
    return {
      backgroundColor: hover ? "#171621" : "#2b283d",
      padding: "5px",
    };
  };

  return (
    <React.Fragment>
      <Box animation={boxAnimation} style={boxStyles}>
        <TextInput
          autoFocus={true}
          style={textInputStyle}
          placeholder="Player 1 ID (no #)"
          name="playerOneId"
          value={playerOneId}
          onChange={(event) =>
            setPlayerOneId(event.target.value.toUpperCase().substring(0, 8))
          }
        />
      </Box>
      <Box animation={secondTextAnimation} style={boxStyles}>
        <TextInput
          style={textInputStyle}
          placeholder="Player 2 ID (no #)"
          name="playerTwoId"
          value={playerTwoId}
          onChange={(event) =>
            setPlayerTwoId(event.target.value.toUpperCase().substring(0, 8))
          }
        />
      </Box>
      <Box animation={buttonAnimation} style={boxStyles}>
        <div style={{ marginTop: "5vh" }}>
          <Link
            to="/"
            onMouseEnter={() => setBackHover(true)}
            onMouseLeave={() => setBackHover(false)}
            style={{ marginRight: "50%" }}
          >
            <CaretPrevious
              size="large"
              color={backHover ? "#33b04a" : "#ffffff"}
              style={caretStyle(backHover)}
            />
          </Link>
          <Link
            to="/drafter"
            onMouseEnter={() => setNextHover(true)}
            onMouseLeave={() => setNextHover(false)}
            onClick={(event) => {
              localStorage.setItem("playerOneId", playerOneId);
              localStorage.setItem("playerTwoId", playerTwoId);
            }}
          >
            <CaretNext
              size="large"
              color={nextHover ? "#33b04a" : "#ffffff"}
              style={caretStyle(nextHover)}
            />
          </Link>
        </div>
      </Box>
    </React.Fragment>
  );
}
