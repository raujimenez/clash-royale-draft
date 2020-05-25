import React, { useState } from "react";
import { Box } from "grommet";
import { Aid } from "grommet-icons";

const boxStyles = {
  paddingRight: "20px",
  paddingTop: "15px",
  paddingBottom: "15px",
  textAlign: "center",
};

const boxAnimation = {
  type: "slideDown",
  size: "large",
};

export default function Header() {
  const [supportHover, setSupportHover] = useState(false);

  const linkStyle = {
    padding: "10px",
    textDecoration: "none",
    color: "#ccdded",
    backgroundColor: supportHover ? "#171621" : "#2b283d",
  };

  return (
    <Box align="end" animation={boxAnimation} style={boxStyles}>
      <div>
        <a
          style={linkStyle}
          href="https://www.feedingamerica.org/take-action"
          onMouseEnter={() => setSupportHover(true)}
          onMouseLeave={() => setSupportHover(false)}
        >
          <Aid
            color="#33b04a"
            style={{ paddingRight: "8px", verticalAlign: "bottom" }}
          />
          Support COVID-19
        </a>
      </div>
    </Box>
  );
}
