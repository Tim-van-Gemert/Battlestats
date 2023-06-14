import { useEffect } from "react";

const ConstructObjectiveData = (props) => {
    const { APIData, setObjectiveData, game } = props;
    console.log(APIData)
    let objectiveData;
    if (game == 'bf2042') {
    objectiveData = [
        { name: 'Captured', data: APIData.objective.captured },
        { name: 'Neutralized', data: APIData.objective.neutralized },
        { name: 'Defused', data: APIData.objective.defused },
        { name: 'Destroyed', data: APIData.objective.destroyed },
        { name: 'Attacked', data: APIData.objective.time.attacked },
        { name: 'Defended', data: APIData.objective.time.defended }
      ];
    } else {
      objectiveData = [
        { name: 'Wins', data: APIData.wins },
        { name: 'loses', data: APIData.bonusScore },
        { name: 'Win Rate', data: APIData.winPercent },
        { name: 'Award score', data: APIData.awardScore },
        { name: 'Squad score', data: APIData.squadScore },
        { name: 'Rank progress', data: APIData.currentRankProgress }
      ];
    }
    if (objectiveData != undefined) {
    // const sortedObjectiveData = objectiveData.sort((a, b) => b.data - a.data);
    setObjectiveData(objectiveData);
    }

};

export default ConstructObjectiveData;
