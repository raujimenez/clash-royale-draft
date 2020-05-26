import React, { useState, useEffect } from "react";
import shuffle from "shuffle-array";
import getPlayersInfo from "../services/getPlayersInfo.js";

import { Box } from "grommet";

const boxAnimation = {
  type: "slideUp",
  size: "xlarge",
};

export default function Drafter() {
  const [cardImages, setCardImages] = useState(null);
  const [imageHover, setImageHover] = useState(-1);
  const [cardsSelected, setCardsSelected] = useState([]);

  useEffect(() => {
    async function getPlayersData() {
      const response = await getPlayersInfo();
      setCardImages(
        shuffle(
          Object.keys(response.data.playerOne.cards).map((key, index) => (
            <img
              key={response.data.playerOne.cards[key]["id"]}
              src={response.data.playerOne.cards[key]["iconUrls"]["medium"]}
              style={{
                width: 277,
                height: 330,
              }}
              alt={response.data.playerOne.cards[key]["name"]}
            />
          )),
          { copy: true }
        )
      );
    }
    getPlayersData();
  }, []);

  return (
    <React.Fragment>
      <Box align="center" animation={boxAnimation}>
        <div style={{ display: "grid", gridColumn: 3 }}>
          {cardImages == null
            ? "loading..."
            : cardImages.slice(0, 3).map((image, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      gridColumn: index + 1,
                      marginRight: "5vw",
                      marginLeft: "5vw",
                      backgroundColor:
                        imageHover === index ? "#171621" : "#2b283d",
                      borderRadius: "30px",
                    }}
                    onMouseEnter={() => {
                      setImageHover(index);
                    }}
                    onMouseLeave={() => {
                      setImageHover(-1);
                    }}
                    onClick={() => {
                      setCardsSelected(cardsSelected.concat(image.props.src));
                      setCardImages(cardImages.slice(3));
                    }}
                  >
                    {image}
                  </div>
                );
              })}
        </div>
      </Box>
    </React.Fragment>
  );
}
