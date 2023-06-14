import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

import DataFetcher from "@/components/dataFetcher";
import DisplayData from "@/components/displayData";

const games = [
  {
    name: 'Battlefield 2042',
    slug: 'bf2042',
    img: "bg-[url('/bf2042.png')]",
  },
  {
    name: 'Battlefield V',
    slug: 'bfv',
    img: "bg-[url('/bfv.jpg')]",
  },
  {
    name: 'Battlefield 4',
    slug: 'bf4',
    img: "bg-[url('/bf4.jpg')]",
  },
  {
    name: 'Battlefield 1',
    slug: 'bf1',
    img: "bg-[url('/bf1.jpg')]",
  },
  {
    name: 'Battlefield Hardline',
    slug: 'bfh',
    img: "bg-[url('/bfh.jpg')]",
  },
];

export default function Home() {
  const router = useRouter();
  const [playerData, setPlayerData] = useState();
  const [currentGame, setCurrentGame] = useState();
  const [combatData, setCombatData] = useState();
  const [bestWeapon, setBestWeapon] = useState();
  const [objectiveData, setObjectiveData] = useState();
  const [gameModeData, setGameModeData] = useState();
  const [classData, setClassData] = useState();
  const [mapData, setMapData] = useState();
  let img = ''

  useEffect(() => {
    setCurrentGame(router.query.game);
  }, [router.query.game]);

  if (router.query.game == undefined)  {
    router.query.game = 'bf2042'
  }
  console.log(router.query.game)

  useEffect(() => {

  }, [bestWeapon])


  return (
    <>
      <DataFetcher 
      players={['TIMMMAHHHHHH']} 
      setPlayerData={setPlayerData} 
      setObjectiveData={setObjectiveData} 
      game={currentGame} 
      setCombatData={setCombatData}
      setGameModeData={setGameModeData} 
      setClassData={setClassData}
      setMapData={setMapData}
      />

      <div className="w-[1200px] z-20 mt-12 flex flex-col gap-6 h-full">
        <div className="flex flex-row gap-6">
          <img src={playerData?.avatar} className={`h-[100px] w-[100px] relative z-20 rounded-[5px] bg-[#1E1E27] ${!playerData ? 'skeleton' : ''}`} />
          <div className="flex flex-col h-full gap-1 justify-center">
            <h1 className={`text-[24px] ${!playerData ? 'rounded-[5px] skeleton w-[200px] bg-[#1E1E27] h-[30px]' : ''}`}>{playerData?.userName}</h1>
            <p className={`text-[18px] ${!playerData ? 'rounded-[5px] skeleton w-[100px] bg-[#1E1E27] h-[30px]' : ''} text-[#B4B4B4]`}>{playerData?.id}</p>
          </div>
        </div>
        <div className="flex flex-row relative gap-6  z-20">
          {games.map((g) => {
            if (g.slug == router.query.game) {
              img = g.img
            }
            return (
              <Link key={g.slug} href={`/?game=${g.slug}`} className={`p-3 ${g.slug === router.query.game ? 'bg-[#1E1E27]' : 'hover:bg-[#1E1E27]'} ${!playerData ? 'rounded-[5px] skeleton bg-[#1E1E27] w-[150px] h-[30px]' : ''} transition-all rounded-[5px] hover:cursor-pointer`}>{!playerData ? null : g.name}</Link>
            );
          })}
        </div>
        <div className="flex flex-row relative z-20 h-[300px]">
          <div className={` bg-[#1E1E27] ${!playerData ? 'skeleton' : ''} rounded-[5px] w-full h-full p-5 gap-6`}>
            {playerData && (
                  <DisplayData 
                  combatData={combatData}
                  objectiveData={objectiveData}
                  gameModeData={gameModeData}
                  classData={classData}
                  mapData={mapData}
                  game={currentGame}
                  />
            )}
          </div>
        </div>
        <div className={`rounded-[10px] transition-all w-full min-w-full min-h-full absolute left-0 top-0 z-10 opacity-[5%] bg-no-repeat bg-cover ${img} h-full`} />
      </div>
    </>
  );
}


// <div className="flex flex-col justify-between col-span-2">
// <div className="font-bold">Best Weapons</div>
// <div className="flex flex-row gap-12">
// {bestWeapon?.map((bw) => {
//   return (
//     <div className="flex flex-col  gap-2">
//       <div className="flex flex-row  gap-4">
//         <div className="flex flex-row ">
//           <div className="text-[#B4B4B4]"> Name :</div> <div>{bw.name}</div>
//         </div>
//         <div className="flex flex-row">
//           <div className="text-[#B4B4B4]"> Type :</div> <div>{bw.type}</div>
//         </div>
//         <div className="flex flex-row">
//           <div className="text-[#B4B4B4]"> Kills :</div> <div>{bw.kills}</div>
//         </div>
//         <div className="flex flex-row">
//           <div className="text-[#B4B4B4]"> Times :</div> <div>{bw.timeEquiped}</div>
//         </div>
        
//       </div>
//       <img className="w-full h-[150px]" src={bw.img} />

//     </div>
//   )
// })}
// </div>
// </div>