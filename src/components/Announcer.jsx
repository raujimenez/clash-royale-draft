import React from "react";
import { Box } from "grommet";

const boxStyles = {
  paddingTop: "10%",
  paddingBottom: "10%",
  fontSize: "10vh",
  textAlign: "center",
};

const boxAnimation = {
  type: "slideDown",
  size: "xlarge",
};

export default function Announcer() {
  return (
    <Box animation={boxAnimation} style={boxStyles} align="center">
      Clash Royale Drafter
    </Box>
  );
}
