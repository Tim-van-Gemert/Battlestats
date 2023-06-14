import { useEffect } from "react";
import ConstructClassData from "./constructors/classesConstructor";
import ConstructMapData from "./constructors/mapConstructor";
import ConstructCombatData from "./constructors/combatConstructor";
import ConstructObjectiveData from "./constructors/objectiveConstructor";
import ConstructGameModeData from "./constructors/gamemodeConstructor";

const ConstructData = (props) => {
  const { APIData, setCombatData, setObjectiveData, fetchedData, setGameModeData, setClassData, setMapData, game } = props;
    if (game != undefined) {
      if (game == 'bf2042') {
        useEffect(()=>{
          ConstructObjectiveData({APIData, setObjectiveData, game})
          ConstructGameModeData({APIData, setGameModeData})
          ConstructCombatData({APIData, setCombatData, game})
          ConstructMapData({APIData, setMapData})
          ConstructClassData({APIData, setClassData, game})
        },[APIData])
      } else {
        useEffect(()=>{
          ConstructObjectiveData({APIData, setObjectiveData, game})
          ConstructCombatData({APIData, setCombatData, game})
          ConstructClassData({APIData, setClassData, game})
        },[APIData])
      }
    }

    
  

    
    
  
  

  return null; // Assuming this component is only responsible for side effects
};

export default ConstructData;
