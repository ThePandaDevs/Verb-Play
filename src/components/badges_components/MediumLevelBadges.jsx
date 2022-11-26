import CardBadge from "./CardBadge"
import BG26 from "../../../src/assets/bg-2.6.svg"
import BG27 from "../../../src/assets/bg-2.7.svg"
import BG28 from "../../../src/assets/bg-2.8.svg"

import BG21 from "../../../src/assets/bg-2.1.svg"
import BG22 from "../../../src/assets/bg-2.2.svg"
import BG23 from "../../../src/assets/bg-2.3.svg"
import BG24 from "../../../src/assets/bg-2.4.svg"
import BG25 from "../../../src/assets/bg-2.5.svg"

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
                        src={BG26} />
                </CardBadge>
                <CardBadge>
                    <img className="justify-self-center h-full justify-self-center"
                        src={BG27} />
                </CardBadge>
                <CardBadge>
                    <img className="justify-self-center h-full"
                        src={BG28} />
                </CardBadge>
            </div>
            <div className="grid grid-cols-2 justify-items-center md:grid-cols-5 mt-10 mb-10">
                <div className="h-36 w-36 card mx-50 bg-base shadow-2xl justify-center">
                    <img className="justify-self-center h-full"
                        src={BG21} />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src={BG22} />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src={BG23} />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src={BG24} />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src={BG25} />
                </div>
            </div>
        </>
    )
}

export default MediumLevelBadges;