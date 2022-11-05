import CespedFooter from "./CespedFooter";
import G1 from "../../assets/G1.svg";
import G2 from "../../assets/G2.svg";
import { motion } from "framer-motion"
const LearningPathType = () => {
    return (
        <>
            <div className="pt-10 mx-5 w-auto md:w-2/3 lg:w-2/3">
                <h1 className="flex justify-center text-4xl font-bold mb-2">Select you learning path</h1>
                <p className="flex justify-center font-normal text-lg text-center mb-10">
                    Remember, you can add more verbs to you own verb list and play
                </p>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1
                    }}
                >
                    <div className="btn grid grid-cols-2 normal-case text-left text-black hover:text-white h-auto shadow p-6 rounded-lg mt-5 bg-white border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                        <div className="grid items-center">
                            <h1 className="font-bold text-lg text-left">VerbPlay List</h1>
                            <p className="font-light text-normal">Learn verbs through the VerbPlay path, it contains different levels of difficulty, win trophies and special medals!</p>
                        </div>
                        <div className="grid items-center justify-end ">
                            <img src={G1} className="w-16" />
                        </div>
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
                    <div className="btn grid grid-cols-2 normal-case text-left text-black hover:text-white h-auto shadow p-6 rounded-lg mt-5 bg-white border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                        <div className="grid items-center">
                            <h1 className="font-bold text-lg text-left">My Own List</h1>
                            <p className="font-light text-normal">Special list according to what you need to learn, you can add more by going to "Verbs List".</p>
                        </div>
                        <div className="grid items-center justify-end ">
                            <img src={G2} className="w-16" />
                        </div>
                    </div>
                </motion.div>

            </div>
            <CespedFooter />
        </>
    )
}

export default LearningPathType;