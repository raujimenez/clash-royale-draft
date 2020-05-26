import axios from "axios";

export default function getPlayersInfo() {
  const playerOneId = localStorage.getItem("playerOneId");
  const playerTwoId = localStorage.getItem("playerTwoId");
  return axios
    .get(
      `http://localhost:8080/playerInfo?idPlayerOne=${playerOneId}&idPlayerTwo=${playerTwoId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);
}
