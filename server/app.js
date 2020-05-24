const express = require("express");
const app = express();
const port = "8080";

require("dotenv").config();

const getPlayerInfo = require("./getPlayerInfo.js");

const clashRoyalToken = process.env.token;

app.get("/playerInfo", async (req, res) => {

  // ids are public so query is sufficient
  const idPlayerOne = req.query.idPlayerOne
  const idPlayerTwo = req.query.idPlayerTwo

  const playerOneInfo = await getPlayerInfo.getPlayerInfo(clashRoyalToken, idPlayerOne);
  const playerTwoInfo = await getPlayerInfo.getPlayerInfo(clashRoyalToken, idPlayerTwo);

  return res.json({
    playerOne: playerOneInfo,
    playerTwo: playerTwoInfo,
  });
});

app.listen(port, () => console.log(`started listening on port ${port} `))
