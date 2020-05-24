const fetch = require("node-fetch");

async function getPlayerInfo(token, playerID) {
  const URL = `https://api.clashroyale.com/v1/players/%23${playerID}`;

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      accept: "application/json",
    }
  });
  const responseJSON = await response.json();
  return responseJSON;
}

module.exports = {
    getPlayerInfo
};
