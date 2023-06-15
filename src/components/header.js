const Header = () => {
    return (
        <div className="text-white  flex-row py-5 flex xl:w-[1200px] w-full items-center ">
            <div className="flex flex-col relative z-30 ">
                <Link className="flex justify-start uppercase text-[28px]" href="/">BattleStat</Link>
                <div className="flex justify-start uppercase group text-[12px] w-fit hover:cursor-pointer text-[#B4B4B4] flex flex-col ">
                    <a target="blank" href={"https://www.gametools.network/stats/"}>A Gametools clone</a>
                    <div className="w-0 group-hover:w-full bg-white h-[2px] transition-all" ></div>
                </div>
            </div>
            <div className="w-full flex h-fit  justify-end">
                <div className="group flex flex-col  w-fit z-30 relative  hover:cursor-pointer">
                    <a href={'https://github.com/Tim-van-Gemert'} target="blank" className="">Github</a>
                    <div className="w-0 transition-all group-hover:w-full bg-white h-[2px]"></div>
                </div>
            </div>
        </div>
    )
}

export default Header