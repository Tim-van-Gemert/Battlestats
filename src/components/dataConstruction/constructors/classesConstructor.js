import { useEffect } from "react";

const ConstructClassData = (props) => {
  const { APIData, setClassData, game } = props;
  let classData;
  console.log(game)
  console.log(APIData)
  if (game != undefined) {
    if (game == 'bf2042') {
      classData = APIData.classes
        .sort((a, b) => b.secondsPlayed - a.secondsPlayed)
        .slice(0, 6)
        .map((item) => ({
          name: item.characterName,
          data: Math.round(item.secondsPlayed / 60 / 60) + "H",
        }));
    } else {
      classData = [
        { name: 'Best Class', data: APIData.bestClass || 0},
        { name: 'Repairs', data: APIData.repairs || 0},
        { name: 'Revives', data: APIData.revives || 0},
        { name: 'Heals', data: APIData.heals || 0},
        { name: 'Skill', data: APIData.kills || 0},
        { name: 'Headshot L', data: APIData.longestHeadShot || 0},
      ]
    }
  }
  if (game != undefined && classData != undefined) {
    setClassData(classData);
  }

};

export default ConstructClassData;
