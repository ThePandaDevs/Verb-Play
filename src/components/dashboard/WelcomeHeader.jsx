
const WelcomeHeader = () => {
    return (
        <>
            <h2 className="card-title text-[#00A67E] font-bold text-3xl py-5">Dashboard</h2>
            <div className="grid grid-cols-1 justify-items-center content-around w-full bg-base-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-[25px] md:grid-cols-2 ">
                <div className="card-body">
                    <h2 className="card-title text-[#00A67E] font-bold text-3xl">Welcome back YakuzaEnjoyer!</h2>
                    <p className="text-center md:center lg:text-left">Keep it up and improve your verb skills!</p>
                </div>
                <img className="invisible md:visible lg:visible transform -translate-y-4 absolute bottom-0 right-0 h-48 mr-10" src="../src/assets/dashboard-gift.svg" />
            </div>
        </>
    )
}

export default WelcomeHeader;