import React from "react";

const DisplayData = (props) => {
  const { combatData, objectiveData, gameModeData, classData, mapData } = props;
  const renderDataSection = (data, title, subtitle) => {
    return (
      <div className="flex flex-col col-span-1 justify-between">
        <div className="flex flex-row gap-2 items-center">
        <div className="font-bold">{title}</div>
        <div className="text-[12px]  text-[#B4B4B4]">{subtitle}</div>
        </div>
        {data.map((d) => (
          <div className="flex flex-row justify-between" key={d.name}>
            <div className="text-[#B4B4B4]">{d.name} :</div>
            <div className="text-white"> {d.data}</div>
          </div>
        ))}
      </div>
    );
  };  

  if (combatData 
    // && objectiveData && gameModeData && classData
    ) {
    return (
      <div className="grid grid-cols-5 gap-12 w-full h-full">
        {renderDataSection(combatData, "Combat")}
        {renderDataSection(classData, "Classes", "(Play time)")}
        {renderDataSection(objectiveData, "Objective")}
        {/* {renderDataSection(gameModeData, "Game Modes", "(Win rate)")}
        {renderDataSection(mapData, "Maps", "(Win rate)")}   */}
      </div>
    );
  }

  return null;
};

export default DisplayData;
