import { motion } from "framer-motion"
const CardBadge = (props) => {
    return (
        <>
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
                <div className="h-36 w-52 card shadow-2xl justify-center mb-5 transition delay-150 duration-300 ease-in-out">

                    {props.children}
                    <div className="bg-[#00A67E] py-1 rounded-md">
                    </div>
                </div>
            </motion.div>

        </>
    )
}

export default CardBadge;