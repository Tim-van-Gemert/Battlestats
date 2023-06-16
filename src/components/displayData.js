import React, { useEffect } from "react";
import MatchChart from "@/components/dataConstruction/charts/matchChart";
import OperatorChart from "@/components/dataConstruction/charts/operatorChart";
import { useAmp } from "next/amp";
import { motion  } from "framer-motion";

const DisplayData = ({ combatData, objectiveData, gameModeData, classData, mapData, game, mapGraphData, playerData, operatorGraphData}) => {
  const renderDataSection = (data, title, subtitle) => {
    return (
      <div className="flex flex-col col-span-1 justify-between">
        <div className="flex flex-row gap-2 items-center">
          <div className="font-bold">{title}</div>
          <div className="text-[12px] text-[#B4B4B4]">{subtitle}</div>
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

  if (game === 'bf2042' && combatData && classData && objectiveData && gameModeData && classData) {
    return (
      <>
        <div className="flex flex-row relative z-20 xl:h-[300px]">
          <motion.div className="bg-[#16181f] rounded-[5px] w-full h-full p-5 gap-6">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 min-w-full min-h-full w-full h-full">
              {renderDataSection(combatData, "Combat")}
              {renderDataSection(classData, "Classes", "(Play time)")}
              {renderDataSection(objectiveData, "Objective")}
              {renderDataSection(gameModeData, "Game Modes", "(Win rate)")}
              {renderDataSection(mapData, "Maps", "(Win rate)")}
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-6">

        <div className={`bg-[#16181f] ${!playerData ? 'skeleton' : ''} rounded-[5px] relative z-20  w-full sm:w-1/2 h-[350px] p-5 gap-6`}>
          <MatchChart mapGraphData={mapGraphData} />
        </div>

        <div className={`bg-[#16181f] ${!playerData ? 'skeleton' : ''} rounded-[5px] relative z-20 w-full sm:w-1/2  h-[350px] p-5 gap-6`}>
          <OperatorChart operatorGraphData={operatorGraphData} />
        </div>
        </div>
  
      </>
    );
  } else if (combatData && classData && objectiveData) {
    return (
      <div className="flex flex-row relative z-20 xl:h-[300px]">
      <div className="bg-[#1E1E27] rounded-[5px] w-full h-full p-5 gap-6">
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 min-w-full min-h-full w-full h-full">
            {renderDataSection(combatData, "Combat")}
            {renderDataSection(classData, "Classes", "(Play time)")}
            {renderDataSection(objectiveData, "Objective")}
          </div>
        </div>
      </div>
    );
  } 


  return null;
};

export default DisplayData;
