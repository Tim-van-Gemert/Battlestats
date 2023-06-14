const Header = () => {
    return (
        <div className="text-white  flex-row py-5 flex xl:w-[1200px] w-full items-center ">
            <div className="flex justify-start uppercase text-[28px] ">BattleStat</div>
            <div className="w-full flex h-fit  justify-end">
                <div className="group flex flex-col gap-1 w-fit z-30 relative  hover:cursor-pointer">
                    <a href={'https://github.com/Tim-van-Gemert'} target="blank" className="">Github</a>
                    <div className="w-0 transition-all group-hover:w-full bg-white h-[2px]"></div>
                </div>
            </div>
        </div>
    )
}

export default Header