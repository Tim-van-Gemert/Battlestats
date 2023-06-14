import { useEffect } from "react";
import ConstructClassData from "./constructors/classesConstructor";
import ConstructMapData from "./constructors/mapConstructor";
import ConstructCombatData from "./constructors/combatConstructor";
import ConstructObjectiveData from "./constructors/objectiveConstructor";
import ConstructGameModeData from "./constructors/gamemodeConstructor";

const ConstructData = (props) => {
  const { APIData, setCombatData, setObjectiveData, fetchedData, setGameModeData, setClassData, setMapData } = props;


      useEffect(()=>{
        ConstructObjectiveData({APIData, setObjectiveData})
        ConstructGameModeData({APIData, setGameModeData})
        ConstructCombatData({APIData, setCombatData})
        ConstructMapData({APIData, setMapData})
        ConstructClassData({APIData, setClassData})
      },[APIData])
    
  

    
    
  
  

  return null; // Assuming this component is only responsible for side effects
};

export default ConstructData;
