import React, { useState, useEffect } from "react";
import shuffle from "shuffle-array";
import getPlayersInfo from "../services/getPlayersInfo.js";
import DeckDisplay from "./DeckDisplay.jsx";
import { Box, Button } from "grommet";

const boxAnimation = {
  type: "slideUp",
  size: "xlarge",
};

const boxStyles = {
  fontSize: "5vh",
  textAlign: "center",
  marginLeft: "100px",
  marginRight: "100px",
};

export default function Drafter() {
  const [cardImages, setCardImages] = useState(null);
  const [imageHover, setImageHover] = useState(-1);
  const [cardsSelected, setCardsSelected] = useState([]);
  const [names, setNames] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  async function getPlayersData(player) {
    const response = await getPlayersInfo();
    setNames([response.data.playerOne.name, response.data.playerTwo.name]);

    const cards = player === 0 ? response.data.playerOne.cards : response.data.playerTwo.cards;

    setCardImages(
      shuffle(
        Object.keys(cards).map((key, index) => (
          <img
            key={cards[key]["id"]}
            src={cards[key]["iconUrls"]["medium"]}
            style={{
              width: 277,
              height: 330,
            }}
            alt={cards[key]["name"]}
          />
        )),
        { copy: true }
      )
    );
  }

  useEffect(() => { 
    getPlayersData();
  }, []);

  return (
    <div>
      <Box
        align="center"
        animation={boxAnimation}
        style={{ fontSize: "5vh", paddingBottom: "5%", paddingTop: "5%" }}
      >
        Card Deck for {currentPlayer === 0 ? names[0] : names[1]}
      </Box>
      <DeckDisplay playerCards={cardsSelected} />
      <Box align="center" animation={boxAnimation}>
        {(() => {
          if (cardsSelected.length !== 8) {
            return (
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
                            setCardsSelected(
                              cardsSelected.concat([image.props.src])
                            );
                            setCardImages(cardImages.slice(3));
                          }}
                        >
                          {image}
                        </div>
                      );
                    })}
              </div>
            );
          } else {
            return (
              <Box align="center" style={boxStyles} animation={boxAnimation}>
                <Button
                  style={{ backgroundColor: "#33b04a", color: "#ccdded" }}
                  size="large"
                  color="#33b04a"
                  label={`Draft ${names[1]}'s Deck`}
                  onClick={() => {
                      setCardsSelected([]);
                      setCurrentPlayer(1);
                      getPlayersData();
                  }}
                />
              </Box>
            );
          }
        })()}
      </Box>
    </div>
  );
}
