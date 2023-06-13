import axios from "axios";
import { useEffect, useState } from "react";
import ConstructData from "./dataConstructor";

const DataFetcher = (props) => {
  const [fetchedData, setFetchedData] = useState()
  useEffect(() => {
    props.players.forEach((player) => {
      axios
        .get(
          `https://api.gametools.network/bf2042/stats/?raw=false&format_values=true&name=${player}&platform=pc&skip_battlelog=false`
        )
        .then((response) => {
          console.log(response.data)
          // return raw data
          props.setPlayerData(response.data)
          // send data to constructor
          setFetchedData(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }, [props.game]);

  if (fetchedData != undefined) {
    return (
      <ConstructData APIData={fetchedData} setCombatData={props.setCombatData}/>
    )
  }

};

export default DataFetcher;
