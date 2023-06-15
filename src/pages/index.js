import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Home() {
  const [userName, setUsernameName] = useState()
  const [platform, setPlatform] = useState('pc')
  const [game, setGame] = useState('bf2042')

  useEffect(()=>{
  },[userName, platform, game])

  return (
    <>
      <Head>
        <title>BattleStat</title>
      </Head>
      <div className={`xl:w-[1200px] w-[100%]  z-20 mt-12 flex flex-col gap-6  h-[100%] min-h-[100%] pb-20`}>
        <div className={` grid grid-cols-1 sm:grid-cols-7 w-[100%] relative z-20 gap-6 xl:h-[100px]`}>
          <input className={` bg-[#1E1E27] sm:col-span-2  rounded-[5px] h-fit p-4 gap-6`} placeholder="Your username" onChange={(event) => setUsernameName(event.target.value)}/>
          <div className=" bg-[#1E1E27]  rounded-[5px] h-fit p-4 gap-6 ">
            <select className="bg-[#1E1E27] w-full" name="platform" id="platform"   onChange={(event) => setPlatform(event.target.value)}>
              <option value="pc">PC</option>
              <option value="xbox">Xbox</option>
              <option value="playstation">Playstation</option>
            </select>
          </div>
          <div className=" bg-[#1E1E27]  rounded-[5px] h-fit p-4 gap-6 ">
            <select className="bg-[#1E1E27] w-full" name="platform" id="platform" onChange={(event) => setGame(event.target.value)}>
              <option value="bf2042">Battlefield 2042</option>
              <option value="bfv">Battlefield V</option>
              <option value="bf4">Battlefield 4</option>
              <option value="bf1">Battlefield 1</option>
              <option value="bfh">Battlefield Hardline</option>
            </select>
          </div>
          <Link href={{pathname: '/stats', query: { userName: userName, platform: platform, game: game  } }}className={` bg-[#1E1E27] hover:cursor-pointer rounded-[5px] text-start w-fit h-fit p-4 gap-6`}>Search</Link>
        </div>
      </div>
    </>)
}