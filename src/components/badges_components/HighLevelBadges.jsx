import CardBadge from "./CardBadge"
import { motion } from "framer-motion"
import { BG33 } from "../../../src/assets/bg-3.3.svg"
import { BG32 } from "../../../src/assets/bg-3.2.svg"
import { BG31 } from "../../../src/assets/bg-3.1.svg"
const HighLevelBadges = () => {

    return (
        <>
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
                            src={BG33} />
                        <p className="font-bold text-md text-center">Individual banner</p>
                        <p className="font-normal text-md text-center">Who needs a group?</p>

                    </div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.7
                    }}
                >
                    <div className="h-64 w-52 card mx-50 bg-base shadow-2xl justify-center
                mb-5">
                        <img className="transform -translate-y-4 h-[50%]"
                            src={BG32} />
                        <p className="font-bold text-md text-center">Consistent user</p>
                        <p className="font-normal text-md text-center">Complete all verb groups</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 1
                    }}
                >
                    <div className="h-64 w-52 card mx-50 bg-base shadow-2xl justify-center
                 mb-5">
                        <img className="transform -translate-y-4 h-[50%]"
                            src={BG31} />
                        <p className="font-bold text-md text-center">Teamwork banner</p>
                        <p className="font-normal text-md text-center">Support to your friends</p>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default HighLevelBadges;