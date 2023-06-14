import React from "react";
import MatchChart from "@/components/dataConstruction/charts/matchChart";

const DisplayData = (props) => {
  const { combatData, objectiveData, gameModeData, classData, mapData, game, mapGraphData, playerData } = props;
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

  if (game != undefined && game == 'bf2042') {
    if (combatData && classData && objectiveData && gameModeData && classData
    ) {
      return (
        <>
        <div className="flex flex-row relative z-20 xl:h-[300px]">
          <div className={` bg-[#1E1E27]  rounded-[5px] w-full h-full p-5 gap-6`}>
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 min-w-full min-h-full w-full h-full">
              {renderDataSection(combatData, "Combat")}
              {renderDataSection(classData, "Classes", "(Play time)")}
              {renderDataSection(objectiveData, "Objective")}
              {renderDataSection(gameModeData, "Game Modes", "(Win rate)")}
              {renderDataSection(mapData, "Maps", "(Win rate)")}
            </div>
          </div>
        </div>
        <div className={` bg-[#1E1E27] ${!playerData ? 'skeleton' : ''} rounded-[5px] w-1/2  h-[350px] p-5 gap-6`}>
            <MatchChart mapGraphData={mapGraphData}/>
        </div>
        </>
      );
    }
  } else {
    if (combatData && classData && objectiveData) {
      return (
        <div className="flex flex-row relative z-20 xl:h-[300px]">
          <div className={` bg-[#1E1E27] rounded-[5px] w-full h-full p-5 gap-6`}>
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 min-w-full min-h-full w-full h-full">
              {renderDataSection(combatData, "Combat")}
              {renderDataSection(classData, "Classes", "(Play time)")}
              {renderDataSection(objectiveData, "Objective")}
            </div>
          </div>
        </div>
      );
    }
  }



  return null;
};

export default DisplayData;
