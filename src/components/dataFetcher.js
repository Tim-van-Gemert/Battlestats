import axios from "axios";
import { useEffect, useState } from "react";
import MainDataConstructor from "./dataConstruction/mainDataConstructor";

const DataFetcher = (props) => {
  const [fetchedData, setFetchedData] = useState()
  console.log(`https://api.gametools.network/${props.game}/stats/?raw=false&format_values=true&name=${props.player}&platform=${props.platform}&skip_battlelog=false`)
  useEffect(() => {
    console.log(props.game)
    if (props.game != undefined) {
      axios
        .get(
          `https://api.gametools.network/${props.game}/stats/?raw=false&format_values=true&name=${props.player}&platform=${props.platform}&skip_battlelog=false`
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
  }
  }, [props.game]);
  
  if (fetchedData != undefined) {
    return (
      <MainDataConstructor 
      APIData={fetchedData} 
      setObjectiveData={props.setObjectiveData} 
      setCombatData={props.setCombatData}
      setGameModeData={props.setGameModeData}
      setClassData={props.setClassData}
      setMapData={props.setMapData}
      setMapGraphData={props.setMapGraphData}
      setOperatorGraphData={props.setOperatorGraphData}
      game={props.game}
      />
    )
  } 

};

export default DataFetcher;
