import AuditoryIMG from '../../assets/auditory.svg'
import KinestheticIMG from '../../assets/kinesthetic.svg'
import CespedFooter from "./CespedFooter";
import VisualIMG from '../../assets/visual.svg'
import { motion } from "framer-motion"

export const TypeGame = () => {
    return (
        <>
            <div className="pt-10 mx-5 w-auto md:w-2/3 lg:w-2/3">
                <h1 className="flex justify-center text-4xl font-bold mb-2">Game Mode</h1>
                <p className="flex justify-center font-normal text-lg text-center mb-10">
                    Please, select a game mode according to the way you would like to play and learn
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
                            <h1 className="font-bold text-lg text-left">Auditory</h1>
                            <p className="font-light text-normal">You store information by the way it sounds, and you have an easier time understanding spoken instructions than written ones.</p>
                        </div>
                        <div className="grid items-center justify-end">
                            <img src={AuditoryIMG} className="w-16" />
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
                            <h1 className="font-bold text-lg text-left">Kinesthetic</h1>
                            <p className="font-light text-normal w-auto">You are a "hands-on" learner who prefers to touch, move, build, or draw what you learn.</p>
                        </div>
                        <div className="grid items-center justify-end">
                            <img src={KinestheticIMG} className="w-16" />
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
                        delay: 0.5
                    }}
                >
                    <div className="btn grid grid-cols-2 normal-case text-left text-black hover:text-white h-auto shadow p-6 rounded-lg mt-5 bg-white border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                        <div className="grid items-center">
                            <h1 className="font-bold text-lg text-left">Visual</h1>
                            <p className="font-light text-normal">You learn best by using methods that are primarily visual. You like to see what you are learning.</p>
                        </div>
                        <div className="grid items-center justify-end ">
                            <img src={VisualIMG} className="w-16" />
                        </div>
                    </div>
                </motion.div>
            </div>
            <CespedFooter />
        </>
    )
}