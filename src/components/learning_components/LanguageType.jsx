import EnglishIMG from "../../assets/eng-esp.svg";
import SpanishIMG from "../../assets/esp-eng.svg";
import CespedFooter from "./CespedFooter";
import { motion } from "framer-motion"
export const LanguageType = () => {
    return (
        <>
            <div className="pt-10 mx-2">
                <h1 className="flex justify-center text-4xl font-bold mb-2">Translation</h1>
                <p className="flex justify-center font-normal text-lg text-center mb-10">
                    Please, select a translation mode according to the way you would like to play and learn
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
                    <div className="btn w-full normal-case text-left text-black hover:text-white h-auto shadow p-6 rounded-lg mt-5 bg-white border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                        <div className="grid grid-flow-col auto-cols-auto">
                            <div className="grid items-center">
                                <h1 className="font-bold text-lg text-left">English to Spanish</h1>
                                <p className="font-light text-normal">
                                    Learn verbs through the concept in English and identifying it in Spanish for example (Bring {"->"} Traer)</p>
                            </div>
                            <div className="grid items-center justify-end ml-6">
                                <img src={EnglishIMG} className="w-16" />
                            </div>
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
                    <div className="btn w-full normal-case text-left text-black hover:text-white h-auto border-none h-auto shadow p-6 rounded-lg mt-4 bg-white border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                        <div className="grid grid-flow-col auto-cols-auto">
                            <div className="grid items-center">
                                <h1 className="font-bold text-lg text-left">Spanish to English</h1>
                                <p className="font-light text-normal">Learn verbs through the concept in Spanish and identifying it in English for example (Perseguir {"->"} Chase)</p>
                            </div>
                            <div className="grid items-center justify-end ml-6">
                                <img src={SpanishIMG} className="w-16" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
            <CespedFooter />
        </>

    )
}