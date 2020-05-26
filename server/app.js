const express = require("express");
const cors = require("cors");
require("dotenv").config();
const getPlayerInfo = require("./getPlayerInfo.js");
const app = express();
const port = "8080";

const clashRoyalToken = process.env.token;

app.use(cors());
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

app.listen(port, () => console.log(`started listening on port ${port} `));
