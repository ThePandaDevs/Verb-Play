const StudentsBadges = () => {
    return (
        <>
            <p className="text-xl font-bold mt-10 text-start">Esmeralda's specials badges</p>
                <div className="flex flex-row justify-between mt-6">
                    <div className="h-40 w-44 card mx-50 bg-base shadow-2xl justify-center">
                        <img className="justify-self-center h-full" 
                        src="../../assets/bg-2.8"  />
                        <p className="font-bold text-sm w-full">Complete Group 1</p>
                    </div>
                    <div className="h-40 w-44 card mx-50 bg-base shadow-2xl justify-center">
                        <img className="justify-self-center h-full" 
                        src="../src/assets/bg-time.svg"  />
                        <p className="font-bold text-sm w-full">Play for 1 week</p>
                    </div>
                    <div className="h-40 w-44 card mx-50 bg-base shadow-2xl justify-center">
                        <img className="justify-self-center h-full" 
                        src="../src/assets/bg-team.svg"  />
                        <p className="font-bold text-sm">Assist to special event</p>
                    </div>
                </div>
                <p className="text-xl font-normal text-[#00A67E] underline mt-10 text-start mb-2">See all tropies and medals</p>
        </>
    )
}

export default StudentsBadges;