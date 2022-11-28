import CardBadge from './CardBadge'
import BG16 from "../../../src/assets/bg-1.6.svg"
import BG17 from "../../../src/assets/bg-1.7.svg"
import BG18 from "../../../src/assets/bg-1.8.svg"
import BG11 from "../../../src/assets/bg-1.1.svg"
import BG12 from "../../../src/assets/bg-1.2.svg"
import BG13 from "../../../src/assets/bg-1.3.svg"
import BG14 from "../../../src/assets/bg-1.4.svg"
import BG15 from "../../../src/assets/bg-1.5.svg"

import { motion } from "framer-motion"

import Cesped from "../../../src/assets/game-mode.svg"
const FirstLevelBadges = () => {
    return (
        <>
            <img src={Cesped} className="w-full mt-10" />
            <div className="h-1/1 rounded-b-lg w-full bg-[#00A67E]">
                <p class="text-2xl text-white pb-5 font-bold text-center" >Complete verbs group 1</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center mt-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3
                    }}
                >
                    <div className="h-64 w-52 card mx-50 bg-base shadow-2xl justify-center
                mb-5" >
                        <img className="transform -translate-y-4 h-[50%]"
                            src={BG16} />
                        <p className="font-bold text-md text-center">Starter</p>
                        <p className="font-normal text-md text-center">Learn 20 verbs</p>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3
                    }}
                >
                    <div className="h-64 w-52 card mx-50 bg-base shadow-2xl justify-center
                mb-5" >
                        <img className="transform -translate-y-4 h-[50%]"
                            src={BG17} />
                        <p className="font-bold text-md text-center">[Fighter]</p>
                        <p className="font-normal text-md text-center">Complete G1 verbs</p>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3
                    }}
                >
                    <div className="h-64 w-52 card mx-50 bg-base shadow-2xl justify-center
                mb-5" >
                        <img className="transform -translate-y-4 h-[50%]"
                            src={BG18} />
                        <p className="font-bold text-md text-center">¿Beginner?</p>
                        <p className="font-normal text-md text-center">Play 1 time without getting erros</p>

                    </div>
                </motion.div>

            </div>
            <div className="grid grid-cols-2 justify-items-center md:grid-cols-5 mt-10 mb-10">
                <div className="h-36 w-36 card mx-50 bg-base shadow-2xl justify-center">
                    <img className="justify-self-center h-full"
                        src={BG11} />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src={BG12} />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src={BG13} />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src={BG14} />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src={BG15} />
                </div>
            </div>
        </>
    )
}

export default FirstLevelBadges;