import CardBadge from "./CardBadge"

const HighLevelBadges = () => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center mt-10">
                <div className="h-64 w-52 card mx-50 bg-base shadow-2xl justify-center
                mb-5" >
                    <img className="transform -translate-y-4 h-[50%]"
                        src="../src/assets/bg-3.3.svg" />
                    <p className="font-bold text-md text-center">Individual banner</p>
                    <p className="font-normal text-md text-center">Who needs a group?</p>
                    <div className="shine"></div>
                </div>
                <div className="h-64 w-52 card mx-50 bg-base shadow-2xl justify-center
                mb-5">
                    <img className="transform -translate-y-4 h-[50%]"
                        src="../src/assets/bg-3.2.svg" />
                    <p className="font-bold text-md text-center">Consistent user</p>
                    <p className="font-normal text-md text-center">Complete all verb groups</p>
                </div>
                <div className="h-64 w-52 card mx-50 bg-base shadow-2xl justify-center
                 mb-5">
                    <img className="transform -translate-y-4 h-[50%]"
                        src="../src/assets/bg-3.1.svg" />
                    <p className="font-bold text-md text-center">Teamwork banner</p>
                    <p className="font-normal text-md text-center">Support to your friends</p>
                </div>
            </div>
        </>
    )
}

export default HighLevelBadges;