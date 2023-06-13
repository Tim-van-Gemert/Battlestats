import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

import DataFetcher from "@/components/dataFetcher";
import DisplayData from "@/components/displayData";

const games = [
  {
    name: 'Battlefield 2042',
    slug: 'Battlefield_2042',
    img: "bg-[url('/bf2042.png')]",
  },
  {
    name: 'Battlefield V',
    slug: 'Battlefield_v',
    img: "bg-[url('/bfv.jpg')]",
  },
  {
    name: 'Battlefield 4',
    slug: 'Battlefield_4',
    img: "bg-[url('/bf4.jpg')]",
  },
  {
    name: 'Battlefield 1',
    slug: 'Battlefield_1',
    img: "bg-[url('/bf1.jpg')]",
  },
  {
    name: 'Battlefield Hardline',
    slug: 'Battlefield_hardline',
    img: "bg-[url('/bfh.jpg')]",
  },
];

export default function Home() {
  const router = useRouter();
  const [playerData, setPlayerData] = useState();
  const [currentGame, setCurrentGame] = useState();
  const [combatData, setCombatData] = useState();
  let img = ''

  useEffect(() => {
    setCurrentGame(router.query.game);
  }, [router.query.game]);

  return (
    <>
      <DataFetcher players={['TIMMMAHHHHHH']} setPlayerData={setPlayerData} game={currentGame} setCombatData={setCombatData} />
      <div className="w-[1200px] z-20 mt-12 flex flex-col gap-6 h-full">
        <div className="flex flex-row gap-6">
          <img src={playerData?.avatar} className={`h-[100px] w-[100px] relative z-20 rounded-[5px] bg-[#1E1E27] ${!playerData ? 'skeleton' : ''}`} />
          <div className="flex flex-col h-full gap-2 justify-center">
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
        <div className="flex flex-row relative z-20 h-[300px] gap-6">
          <div className={`grid grid-cols-6 bg-[#1E1E27] ${!playerData ? 'skeleton' : ''} rounded-[5px] w-full h-full p-5 gap-6`}>
            <div className="flex flex-col gap-3">
              {playerData && (
                <>
                  <div className="font-bold">Combat</div>
                  <DisplayData APIData={combatData} />
                </>
              )}
            </div>
          </div>
        </div>
        <div className={`rounded-[10px] transition-all w-full min-w-full min-h-full absolute left-0 top-0 z-10 opacity-[5%] bg-no-repeat bg-cover ${img} h-full`} />
      </div>
    </>
  );
}
