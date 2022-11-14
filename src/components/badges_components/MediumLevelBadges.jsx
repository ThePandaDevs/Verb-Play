import CardBadge from "./CardBadge"

const MediumLevelBadges = () => {
    return (
        <>
            <p class="text-2xl text-[#00A67E] pt-5 font-bold mt-10 mb-10" >Complete verbs group 2</p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                <CardBadge>
                    <img className="justify-self-center h-full" 
                        src="../src/assets/bg-2.6.svg"  />
                </CardBadge>
                <CardBadge>
                    <img className="justify-self-center h-full justify-self-center" 
                        src="../src/assets/bg-2.7.svg"  />
                </CardBadge>
                <CardBadge>
                    <img className="justify-self-center h-full" 
                        src="../src/assets/bg-2.8.svg"  />
                </CardBadge>
            </div>
            <div className="grid grid-cols-2 justify-items-center md:grid-cols-5 mt-10">
                <div className="h-36 w-36 card mx-50 bg-base shadow-2xl justify-center">
                    <img className="justify-self-center h-full" 
                    src="../src/assets/bg-2.1.svg"  />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full" 
                    src="../src/assets/bg-2.2.svg"  />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full" 
                    src="../src/assets/bg-2.3.svg"  />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full" 
                    src="../src/assets/bg-2.4.svg"  />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full" 
                    src="../src/assets/bg-2.5.svg"  />
                </div>
            </div>
        </>
    )
}

export default MediumLevelBadges;