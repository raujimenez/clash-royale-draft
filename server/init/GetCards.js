const fetch = require("node-fetch");

const GetCards = async (token) => {
  const URL = `https://api.clashroyale.com/v1/cards`;

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });

  if (!response) {
    return [];
  }

  const cardCollection = await response.json();
  if (!cardCollection) {
    return [];
  }

  return cardCollection.items;
};

module.exports = {
  GetCards,
};
