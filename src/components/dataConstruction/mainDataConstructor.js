import { useEffect, useState } from "react";
import ConstructClassData from "./constructors/classesConstructor";
import ConstructMapData from "./constructors/mapConstructor";
import ConstructCombatData from "./constructors/combatConstructor";
import ConstructObjectiveData from "./constructors/objectiveConstructor";
import ConstructGameModeData from "./constructors/gamemodeConstructor";

const ConstructData = (props) => {
  const {
    APIData,
    setCombatData,
    setObjectiveData,
    fetchedData,
    setGameModeData,
    setMapGraphData,
    setClassData,
    setMapData,
    game
  } = props;

  useEffect(() => {
    if (game !== undefined) {
      if (game === "bf2042") {
        ConstructObjectiveData({ APIData, setObjectiveData, game });
        ConstructGameModeData({ APIData, setGameModeData });
        ConstructCombatData({ APIData, setCombatData, game });
        ConstructMapData({ APIData, setMapData, setMapGraphData });
        ConstructClassData({ APIData, setClassData, game });
      } else {
        ConstructObjectiveData({ APIData, setObjectiveData, game });
        ConstructCombatData({ APIData, setCombatData, game });
        ConstructClassData({ APIData, setClassData, game });
      }
    }
  }, [APIData]);

  return null; // Assuming this component is only responsible for side effects
};

export default ConstructData;
