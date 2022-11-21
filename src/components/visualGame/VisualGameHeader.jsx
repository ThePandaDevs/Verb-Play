
const VisualGameHeader = () => {
    return (
        <>
            <div className="p-5 justify-center md:flex justify-between  w-full bg-base-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-[25px] md:grid-cols-2 ">
                <div className="flex justify-center md:justify-start ">
                    <div className="grid">
                        <h3 className="font-bold text-black text-lg">Match the spanish verbs with the english verbs</h3>
                        <p className="font-normal text-center md:text-left lg:text-left">If you can’t match them continue with the next</p>
                    </div>
                </div>

                <div className="flex flex-row justify-around py-3 md:justify-end md:py-0 lg:justify-end lg:py-0">
                    <div className="tooltip" data-tip="Skip game">
                        <button className="btn bg-[#00A67E] hover:bg-[#E75151] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                            <svg className="w-5 h-10" viewBox="0 0 73 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.5 27.6699C57.8333 29.5944 57.8333 34.4056 54.5 36.3301L7.99999 63.1769C4.66666 65.1014 0.5 62.6958 0.5 58.8468L0.5 5.15321C0.5 1.30421 4.66666 -1.10142 8 0.823085L54.5 27.6699Z" fill="white" />
                                <path d="M21 9V55C29.7983 50.1212 48.866 39.5273 54.7507 36.1818C60.6355 32.8364 57.2027 29.4909 54.7507 28.2364L21 9Z" fill="#D9D9D9" stroke="#D9D9D9" />
                                <rect x="60" y="7" width="13" height="50" rx="4" fill="white" />
                                <path d="M66 7H69C71.2091 7 73 8.79086 73 11V53C73 55.2091 71.2091 57 69 57H66V7Z" fill="#D9D9D9" />
                            </svg>
                        </button>

                    </div>
                    <div className="tooltip ml-8" data-tip="Show answer">
                        <span className="animate-[2s_ping_infinite] absolute  h-full w-full rounded-md bg-[#FABE2C] opacity-40"></span>
                        <button className="btn bg-[#00A67E] hover:bg-[#FABE2C] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                            <img className="w-10 h-10" src="../src/assets/show-idea.svg" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisualGameHeader;