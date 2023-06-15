import Link from "next/link";
import { useRouter } from 'next/router';

const GameSelection = ({platform, userName, playerData, openMenu, setOpenMenu, games, img}) => {
    const router = useRouter();
    return (
        <>
        <div className="w-full flex sm:hidden gap-8 items-center flex-row">
        <Link href={'/'} id='currentitem' className={`p-3 w-full z-30 relative bg-[#1E1E27] ${!playerData ? 'rounded-[5px] skeleton bg-[#1E1E27] w-[150px] h-[30px]' : ''} transition-all rounded-[5px] hover:cursor-pointer`} />
        <div className="container z-30  flex justify-end w-fit" onClick={() => { setOpenMenu(!openMenu) }}>
          <div className={`bar1  ${openMenu ? 'change1' : ''}`}></div>
          <div className={`bar2  ${openMenu ? 'change2' : ''}`}></div>
          <div className={`bar3  ${openMenu ? 'change3' : ''}`}></div>
        </div>
      </div>
      <div className={`sm:flex-row flex-col  flex relative sm:text-[18px] gap-6 ${openMenu ? 'flex' : 'hidden sm:flex'}  z-20`}>
        {games.map((g) => {
          if (g.slug === router.query.game) {
            img = g.img;
          }
          return (
            <Link key={g.slug} href={`/stats?userName=${userName}&platform=${platform}&game=${g.slug}`} className={`p-3 ${g.slug === router.query.game ? 'bg-[#1E1E27]' : 'hover:bg-[#1E1E27]'} ${!playerData ? 'rounded-[5px] skeleton bg-[#1E1E27] w-[150px] h-[30px]' : ''} transition-all rounded-[5px] hover:cursor-pointer ${openMenu && g.slug === router.query.game ? 'hidden' : ''}`} onClick={() => {setOpenMenu(false)}}>{!playerData ? null : g.name}</Link>
          );
        })}
      </div>
      </>
    )
}
export default GameSelection