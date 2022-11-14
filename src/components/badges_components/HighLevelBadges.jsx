import CardBadge from "./CardBadge"

const HighLevelBadges = () => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center mt-10">
                <div className="h-64 w-52 card mx-50 bg-base shadow-2xl justify-center
                bg-gradient-to-b from-[#00A67E] to-[#ffff] mb-5">
                    <img className="transform -translate-y-4 h-[50%]" 
                        src="../src/assets/bg-3.3.svg"  />
                    <p className="font-bold text-md">Individual banner</p>
                    <p className="font-normal text-md">Who needs a group?</p>
                </div>
                <div className="h-64 w-52 card mx-50 bg-base shadow-2xl justify-center
                bg-gradient-to-b from-[#00A67E] to-[#ffff] mb-5">
                    <img className="transform -translate-y-4 h-[50%]" 
                        src="../src/assets/bg-3.2.svg"  />
                        <p className="font-bold text-md">Consistent user</p>
                        <p className="font-normal text-md">Who needs a group?</p>
                </div>
                <div className="h-64 w-52 card mx-50 bg-base shadow-2xl justify-center
                bg-gradient-to-b from-[#00A67E] to-[#ffff] mb-5">
                    <img className="transform -translate-y-4 h-[50%]" 
                        src="../src/assets/bg-3.1.svg"  />
                        <p className="font-bold text-md">Teamwork banner</p>
                        <p className="font-normal text-md">Who needs a group?</p>
                </div>
            </div>
        </>
    )
}

export default HighLevelBadges;