import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import GameSelection from "@/components/statspage/gameSelection";

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

export default function Stats() {
  const router = useRouter();
  const [playerData, setPlayerData] = useState();
  const [currentGame, setCurrentGame] = useState();
  const [combatData, setCombatData] = useState();
  const [bestWeapon, setBestWeapon] = useState();
  const [objectiveData, setObjectiveData] = useState();
  const [gameModeData, setGameModeData] = useState();
  const [classData, setClassData] = useState();
  const [mapData, setMapData] = useState();
  const [mapGraphData, setMapGraphData] = useState()
  const [operatorGraphData, setOperatorGraphData] = useState()
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedMobileMenuItem, setSelectedMobileMenuItem] = useState()
  const [img, setImg] = useState()


  useEffect(() => {
    setCurrentGame(router.query.game);
  }, [router.query.game]);

  useEffect(() => {

  }, [bestWeapon]);

  const { userName } = router.query;
  const { game } = router.query;
  const { platform } = router.query;

  const TEST = 'test';

  useEffect(() => {
    const currentGameObj = games.find((g) => g.slug === router.query.game);
    if (currentGameObj) {
      document.getElementById('currentitem').textContent = currentGameObj.name;
    }
  }, [router.query.game]);

  if (userName != undefined && game != undefined && platform != undefined) {
    return (
      <>
        <DataFetcher
          player={userName}
          setPlayerData={setPlayerData}
          setObjectiveData={setObjectiveData}
          game={game}
          platform={platform}
          setCombatData={setCombatData}
          setGameModeData={setGameModeData}
          setClassData={setClassData}
          setMapData={setMapData}
          setMapGraphData={setMapGraphData}
          setOperatorGraphData={setOperatorGraphData}
        />
        <Head>
          <title>{playerData?.userName} | {currentGame}</title>
        </Head>
        <div className={`xl:w-[1200px] w-full z-20 mt-12 flex flex-col gap-6  h-[100%] min-h-[100%] pb-20`}>
          <Link className="relative z-20 text-[#B4B4B4] w-fit flex flex-row gap-2 items-center group" href={'/'}><FontAwesomeIcon className="group-hover:-translate-x-1 h-[12px] transition-all" icon={faArrowLeft} /><div>Back to home</div></Link>
          <div className="flex flex-row gap-6">
            <img  border="0" src={'bfpfp.jpeg'} className={`h-[100px] w-[100px] relative z-20 rounded-[5px] bg-[#313443] ${!playerData ? 'skeleton' : ''}`} />
            <div className="flex flex-col h-full gap-1 relative z-20 justify-center">
              <h1 className={`text-[24px] text-[white]  ${!playerData ? 'rounded-[5px] skeleton w-[200px] bg-[#313443] text-white h-[30px]' : ' text-[white]'}`}>{playerData?.userName}</h1>
              <p className={`text-[18px] ${!playerData ? 'rounded-[5px] skeleton w-[100px] bg-[#313443] h-[30px]' : ''} text-[#B4B4B4]`}>{playerData?.id}</p>
            </div>
          </div>
            <GameSelection platform={platform} userName={userName} playerData={playerData} setOpenMenu={setOpenMenu} openMenu={openMenu} games={games} setImg={setImg}/>
          <div className={` flex-row ${!playerData ? ' flex skeleton' : 'hidden'} relative z-20 xl:h-[300px]`}>
            <div className={` bg-[#1E1E27] ${!playerData ? 'skeleton' : 'hidden'} rounded-[5px] w-full h-full p-5 gap-6`}>
            </div>
          </div>
          {playerData && (
            <DisplayData
              combatData={combatData}
              objectiveData={objectiveData}
              gameModeData={gameModeData}
              classData={classData}
              mapData={mapData}
              mapGraphData={mapGraphData}
              game={currentGame}
              playerData={playerData}
              operatorGraphData={operatorGraphData}
            />
          )}

          <div className={`rounded-[10px] transition-all h-screen w-screen absolute left-0 top-0 z-[9] opacity-[15%] bg-no-repeat bg-cover ${img}`} />
          <div className="rounded-[10px] transition-all h-screen w-screen absolute left-0 top-0 z-[10]  bg-no-repeat bg-cover bg-gradient-to-t from-[#0D0E13] via-[#0D0E13] to-transparant" />

        </div>
      </>
    )
  }
}


