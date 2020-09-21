const express = require("express");
const cors = require("cors");
require("dotenv").config();
const getPlayerInfo = require("./getPlayerInfo.js");
const GetCards = require("./init/GetCards.js");
const app = express();
const port = "8080";

const clashRoyalToken = process.env.token;

let CardCollection = [];

// TODO: fix this cors policy soon :o
app.use(cors());

app.get("/getCards", async (req, res) => {
  if (!CardCollection) {
    return res.status(500);
  }
  return res.json(await JSON.stringify(CardCollection));
});

app.get("/playerInfo", async (req, res) => {
  // ids are public so query is sufficient
  const idPlayerOne = req.query.idPlayerOne;
  const idPlayerTwo = req.query.idPlayerTwo;

  const playerOneInfo = await getPlayerInfo.getPlayerInfo(
    clashRoyalToken,
    idPlayerOne
  );
  const playerTwoInfo = await getPlayerInfo.getPlayerInfo(
    clashRoyalToken,
    idPlayerTwo
  );

  console.log(`processed ${idPlayerOne} ${idPlayerTwo}`);
  return res.json({
    playerOne: playerOneInfo,
    playerTwo: playerTwoInfo,
  });
});

app.listen(port, async () => {
  CardCollection = await GetCards.GetCards(clashRoyalToken);
  console.log(`started listening on port ${port} `);
});
