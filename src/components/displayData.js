import React from "react";

const DisplayData = (props) => {
  const { combatData, objectiveData, gameModeData, classData, mapData } = props;
  if (combatData && objectiveData && gameModeData && classData) {
    return (
      <div className="grid grid-cols-5 gap-16 w-full h-full">
        <div className="flex flex-col justify-between">
          <div className="font-bold">Combat</div>
          {combatData.map((d) => (
            <div className="flex flex-row justify-between" key={d.name}>
              <div className="text-[#B4B4B4]">{d.name} :</div>
              <div className="text-white"> {d.data}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col col-span-1 justify-between">
          <div className="font-bold">Classes</div>
          {classData.map((d) => (
            <div className="flex flex-row justify-between" key={d.name}>
              <div className="text-[#B4B4B4]">{d.name} :</div>
              <div className="text-white"> {d.data}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between">
          <div className="font-bold">Objective</div>
          {objectiveData.map((d) => (
            <div className="flex flex-row justify-between" key={d.name}>
              <div className="text-[#B4B4B4]">{d.name} :</div>
              <div className="text-white"> {d.data}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col col-span-1 justify-between">
          <div className="font-bold">Gamemodes</div>
          {gameModeData.map((d) => (
            <div className="flex flex-row justify-between" key={d.name}>
              <div className="text-[#B4B4B4]">{d.name} :</div>
              <div className="text-white"> {d.data}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col col-span-1 justify-between">
          <div className="font-bold">Maps</div>
          {mapData.map((d) => (
            <div className="flex flex-row justify-between" key={d.name}>
              <div className="text-[#B4B4B4]">{d.name} :</div>
              <div className="text-white"> {d.data}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default DisplayData;
