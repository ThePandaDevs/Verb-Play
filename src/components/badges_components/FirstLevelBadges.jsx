import CardBadge from './CardBadge'

const FirstLevelBadges = () => {
    return (
        <>
            <p class="text-2xl text-[#00A67E] font-bold pt-5 mt-10 mb-10 text-center" >Complete verbs group 1</p>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
                <CardBadge>
                    <img className="h-full justify-self-center"
                        src="../src/assets/bg-1.6.svg" />
                </CardBadge>
                <CardBadge>
                    <img className="h-full justify-self-center"
                        src="../src/assets/bg-1.7.svg" />
                </CardBadge>
                <CardBadge>
                    <img className="h-full justify-self-center"
                        src="../src/assets/bg-1.8.svg" />
                </CardBadge>
            </div>
            <div className="grid grid-cols-2 justify-items-center md:grid-cols-5 mt-10">
                <div className="h-36 w-36 card mx-50 bg-base shadow-2xl justify-center">
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-1.1.svg" />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-1.2.svg" />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-1.3.svg" />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-1.4.svg" />
                </div>
                <div className="h-36 w-36 card mx-50 bg-base shadow-xl justify-center">
                    <img className="justify-self-center h-full"
                        src="../src/assets/bg-1.5.svg" />
                </div>
            </div>
        </>
    )
}

export default FirstLevelBadges;