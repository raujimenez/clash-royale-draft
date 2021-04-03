import axios from "axios";

export default function getPlayerCardInfo(playerId) {
  return axios.get(
      `http://localhost:8080/getPlayer/%23${playerId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
}
