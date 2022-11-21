import CardBadge from "./CardBadge"

const MediumLevelBadges = () => {
    return (
        <>
            <img src="../src/assets/game-mode.svg" className="w-full mt-10" />
            <div className="h-1/1 rounded-b-lg w-full bg-[#00A67E]">
                <p class="text-2xl text-white pb-5 font-bold text-center" >Complete verbs group 2</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center mt-10">
                <CardBadge>
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-2.6.svg" />
                </CardBadge>
                <CardBadge>
                    <img className="justify-self-center h-full justify-self-center"
                        src="../src/assets/bg-2.7.svg" />
                </CardBadge>
                <CardBadge>
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-2.8.svg" />
                </CardBadge>
            </div>
            <div className="grid grid-cols-2 justify-items-center md:grid-cols-5 mt-10 mb-10">
                <div className="h-36 w-36 card mx-50 bg-base shadow-2xl justify-center">
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-2.1.svg" />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-2.2.svg" />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-2.3.svg" />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-2.4.svg" />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-2.5.svg" />
                </div>
            </div>
        </>
    )
}

export default MediumLevelBadges;