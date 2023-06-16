import Link from "next/link";
import { useRouter } from 'next/router';
import { motion } from "framer-motion";

const GameSelection = ({ platform, userName, playerData, openMenu, setOpenMenu, games, setImg }) => {
  const router = useRouter();

  const menuItemsVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scaleY: 1,
      transformOrigin: 'top',
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        delay: index * 0.1,
      },
    }),
  };

  return (
    <>
      <div className={`w-full ${!playerData ? 'hidden' : 'flex sm:hidden'}   sm:hidden gap-8 items-center  flex-row`}>
        <div id="currentitem" className={`p-3 w-full z-20 relative bg-[#1E1E27]  ${!playerData ? 'rounded-[5px] text-[#1E1E27] skeleton bg-[#1E1E27] w-[150px] h-[30px]' : ''} transition-all rounded-[5px] text-[18px] hover:cursor-pointer`} />
        <div className="container z-30 flex justify-end w-fit" onClick={() => setOpenMenu(!openMenu)}>
          <div className={`bar1 ${openMenu ? 'change1' : ''}`}></div>
          <div className={`bar2 ${openMenu ? 'change2' : ''}`}></div>
          <div className={`bar3 ${openMenu ? 'change3' : ''}`}></div>
        </div>
      </div>
      <div className={`sm:flex-row flex-col flex relative text-[18px] gap-6 ${openMenu ? 'flex' : 'hidden sm:flex'} z-20`}>
        {games.map((g, index) => {
            if (g.slug === router.query.game) {
                setImg(g.img)
            }
            if (openMenu && g.slug === router.query.game) {

    
                null
            } else {
          return (
            <motion.div
              key={g.slug}
              animate={openMenu ? 'visible' : 'hidden'}
              custom={index}
              variants={menuItemsVariants}
              className="sm:hidden"
            >
              <Link
                href={`/stats?userName=${userName}&platform=${platform}&game=${g.slug}`}
                className={`p-3 sm:opacity-100 mb-[40px] ${g.slug === router.query.game ? 'bg-[#1E1E27]' : 'hover:bg-[#1E1E27]'} ${!playerData ? 'rounded-[5px] skeleton bg-[#1E1E27] w-[150px] h-[30px]' : ''} transition-all rounded-[5px] hover:cursor-pointer`}
                onClick={() => setOpenMenu(false)}
              >
                {!playerData ? null : g.name}
              </Link>
            </motion.div>
          );
            }
        })}
        <div className="hidden sm:flex gap-6 -mb-6">
            {games.map((g, index) => {
                if (g.slug === router.query.game) {
                    setImg(g.img)
                }
            return (
                <Link
                    href={`/stats/${platform}/${userName}/${g.slug}`}
                    className={`p-3 sm:opacity-100 mb-[40px] ${g.slug === router.query.game ? 'bg-[#1E1E27]' : 'hover:bg-[#1E1E27]'} ${!playerData ? 'rounded-[5px] skeleton bg-[#1E1E27] w-[150px] h-[30px]' : ''} transition-all rounded-[5px] hover:cursor-pointer`}
                    onClick={() => setOpenMenu(false)}
                >
                    {!playerData ? null : g.name}
                </Link>
            );
            })}
        </div>
      </div>
    </>
  );
};

export default GameSelection;
