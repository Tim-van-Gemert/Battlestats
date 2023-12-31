import React, { useEffect } from "react";
import MatchChart from "@/components/dataConstruction/charts/matchChart";
import OperatorChart from "@/components/dataConstruction/charts/operatorChart";
import { useAmp } from "next/amp";
import { motion  } from "framer-motion";

const DisplayData = ({ combatData, objectiveData, gameModeData, classData, mapData, game, mapGraphData, playerData, operatorGraphData}) => {
  const renderDataSection = (data, title, subtitle) => {
    console.log(data)
    return (
      <div className="flex flex-col col-span-1 justify-between">
        <div className="flex flex-row gap-2 items-center">
          <div className="font-bold">{title}</div>
          <div className="text-[12px] text-[#B4B4B4]">{subtitle}</div>
        </div>
        {data.map((d) => (
          <div className="flex flex-row justify-between" key={d.name}>
            <div className="w-full flex flex-row  gap-2 items-center ">
              <img className={`${!d.svg ? '' : 'h-4 w-4 '}`} src={d.svg}></img>
              <div className="text-[#B4B4B4]">{d.name} :</div>
            </div>
            <div className="text-white"> {d.data}</div>
          </div>
        ))}
      </div>
    );
  };



  if (game === 'bf2042' && combatData && classData && objectiveData && gameModeData && classData) {
    const stats = [
      {name: 'Combat', subname: '', data: combatData},
      {name: 'Classes',subname: '', data: classData},
      {name: 'Objective', subname: '', data: objectiveData},
      {name: 'Game Modes', subname: '(Win rate)', data: gameModeData},
      {name: 'Maps', subname: '(Win rate)', data: mapData},
    ]
    return (
      <>
      <div className={`grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full `}>
      {stats.map((s) => {
        return (
          <>
          <div  key={s.name} className="flex flex-row relative z-20 xl:h-[300px]">
          <motion.div className="bg-[#16181f] rounded-[5px] w-full h-full p-5 gap-6">
            <div className="grid w-full grid-cols-1  gap-10 min-w-full min-h-full w-full h-full">
              {renderDataSection(s.data, s.name, s.subname)}
            </div>
          </motion.div>
          </div>
          </>
        )
      })}
      </div>

      {/* TEMP CLASSES COMPONENT */}
      {/* <div className="flex flex-row relative z-20 xl:h-[100px]">
        <motion.div className=" rounded-[5px] grid grid-cols-2 w-full h-full gap-6">
          <div className="grid bg-[#16181f] items-center p-3 w-full grid-cols-1  gap-10 min-w-full min-h-full w-full h-full">
            <img className="w-12 h-12" src="https://cdn.gametools.network/classes/bf2042/IconCharlie-d3876e21.svg"></img>
          </div>
        </motion.div>
      </div> */}
      {/* END TEMP CLASSES COMPONENT */}

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
    const stats = [
      {name: 'Combat', data: combatData},
      {name: 'Classes', data: classData},
      {name: 'Objective', data: objectiveData},
    ]
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
      {stats.map((s) => {
        return (
          <div key={s.name} className="flex flex-row relative z-20 xl:h-[300px]">
          <motion.div className="bg-[#16181f] rounded-[5px] w-full h-full p-5 gap-6">
            <div className="grid w-full grid-cols-1  gap-10 min-w-full min-h-full w-full h-full">
              {renderDataSection(s.data, s.name)}
            </div>
          </motion.div>
        </div>
        )
      })}
      </div>
    );
  } 


  return null;
};

export default DisplayData;
