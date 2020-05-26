import React from "react";
import { Box } from "grommet";

const boxAnimation = {
  type: "slideDown",
  size: "xlarge",
};

export default function DeckDisplay(props) {
    return (
    <Box align="center" animation={boxAnimation}>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", gridTemplateRows: "auto auto"}}>
        {props.playerCards.map((url, index) => {
          const firstRow = index < 4;
          return (
            <div
              key={index}
              style={{
                gridColumn: `${index} ${index}`,
                gridRow: firstRow ? '1 1' : '2 2',
                marginBottom: props.playerCards.length <= 4 ? '50%' : !firstRow ? '50%' : '5%', 
                marginRight: "5vh",
              }}
            >
              <img
                key={index}
                height={100}
                width={120}
                src={url}
                alt="card in deck need to fill in later"
              />
            </div>
          );
        })}
      </div>
    </Box>
  );
}
