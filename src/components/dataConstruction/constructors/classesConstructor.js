import { useEffect } from "react";

const ConstructClassData = (props) => {
  const { APIData, setClassData, game } = props;
  let classData;
  console.log(APIData)

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
      { name: 'Best Class', data: APIData.bestClass },
      { name: 'Repairs', data: APIData.repairs },
      { name: 'Revives', data: APIData.revives },
      { name: 'Heals', data: APIData.heals },
      { name: 'Skill', data: APIData.kills },
      { name: 'Headshot L', data: APIData.longestHeadShot },
    ]
  }
  if (classData != undefined) {
  setClassData(classData);
  }

};

export default ConstructClassData;
