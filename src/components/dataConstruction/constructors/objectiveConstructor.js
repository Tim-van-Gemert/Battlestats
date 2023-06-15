import { useEffect } from "react";

const ConstructObjectiveData = (props) => {
  const { APIData, setObjectiveData, game } = props;
  let objectiveData;
  if (game !== undefined) {
    if (game === 'bf2042') {
      objectiveData = [
        { name: 'Captured', data: APIData.objective.captured || 0 },
        { name: 'Neutralized', data: APIData.objective.neutralized || 0 },
        { name: 'Defused', data: APIData.objective.defused || 0 },
        { name: 'Destroyed', data: APIData.objective.destroyed || 0 },
        { name: 'Attacked', data: APIData.objective.time.attacked || 0 },
        { name: 'Defended', data: APIData.objective.time.defended || 0 }
      ];
    } else {
      objectiveData = [
        { name: 'Wins', data: APIData.wins || 0 },
        { name: 'loses', data: APIData.bonusScore || 0 },
        { name: 'Win Rate', data: APIData.winPercent || 0 },
        { name: 'Award score', data: APIData.awardScore || 0 },
        { name: 'Squad score', data: APIData.squadScore || 0 },
        { name: 'Rank progress', data: APIData.currentRankProgress || 0 }
      ];
    }
  }
  if (game !== undefined && objectiveData !== undefined) {
    // const sortedObjectiveData = objectiveData.sort((a, b) => b.data - a.data);
    setObjectiveData(objectiveData);
  }
};

export default ConstructObjectiveData;
