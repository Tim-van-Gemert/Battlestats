import DataFetcher from "@/components/dataFetcher"
import Link from "next/link"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import DisplayData from "@/components/displayData"

export default function Home() {
  const game = useRouter()
  const [playerData, setPlayerData] = useState();
  const [currentGame, setCurrentGame] = useState();
  const [combatData, setCombatData] = useState();


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
  ]



  useEffect(() => {
    setCurrentGame(game.query.game)
  }, [game.query.game])

  let img = '/bf2042.png'
  return (

    <div className="w-[1200px] z-20  mt-12 flex flex-col gap-6 h-full ">
      <div className=" flex flex-row gap-6 ">
        <div className="h-[100px] w-[100px] relative z-20  bg-[#1E1E27] rounded-[10px]"></div>
        <div className="flex flex-col h-full justify-center">
          <h1 className="text-[24px]">TIMMMAHHHHHH</h1>
          <p className="text-[18px] text-[#B4B4B4]">Lorem Ipsum enz</p>
        </div>
      </div>
      <div className="flex flex-row gap-6 relative z-20">

        {games.map((g) => {
          if (g.slug == game.query.game) {
            img = g.img
          }
          return (
            <Link key={g.slug} href={`/?game=${g.slug}`} className={`p-3 ${g.slug == game.query.game ? 'bg-[#1E1E27]' : 'hover:bg-[#1E1E27]'}  transition-all rounded-[10px] hover:cursor-pointer`}>{g.name}</Link>
          )
        })}

      </div>
      <DataFetcher players={['TIMMMAHHHHHH']} setPlayerData={setPlayerData} game={currentGame} setCombatData={setCombatData} />
      <div className="flex flex-row  relative z-20 h-[300px] gap-6">
        <div className="grid grid-cols-6 bg-[#1E1E27] rounded-[10px] w-full h-full  p-5 gap-6">
          <div className="flex flex-col gap-3">
            <div className="font-bold ">Combat</div>
              <DisplayData APIData={combatData}/>
            </div>
        </div>
      </div>
      <div className={`rounded-[10px] transition-all w-full min-w-full min-h-full absolute left-0  top-0 z-10 opacity-[5%] ${img} bg-no-repeat bg-cover h-full `} src={img}></div>

    </div>
  )
}
