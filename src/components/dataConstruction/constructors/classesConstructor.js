import { useEffect } from "react";

const ConstructClassData = (props) => {
  const { APIData, setClassData } = props;

  const classData = APIData.classes
    .sort((a, b) => b.secondsPlayed - a.secondsPlayed)
    .slice(0, 6)
    .map((item) => ({
      name: item.characterName,
      data: Math.round(item.secondsPlayed / 60 / 60) + "H",
    }));

  setClassData(classData);

};

export default ConstructClassData;
