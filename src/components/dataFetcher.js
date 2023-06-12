import axios from "axios";
import { useEffect } from "react";

const DataFetcher = (props) => {
  useEffect(() => {
    props.players.forEach((player) => {
      axios
        .get(
          `https://api.gametools.network/bf2042/stats/?raw=false&format_values=true&name=${player}&platform=pc&skip_battlelog=false`
        )
        .then((response) => {
          console.log(response.data);
          props.setPlayerData((prevData) => [...prevData, response.data]);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }, [props.players, props.setPlayerData]);

  // Return null or a loading indicator if needed
  return null;
};

export default DataFetcher;
