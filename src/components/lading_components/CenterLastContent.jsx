import BadgeIMG from "../../assets/badges.svg";

export const CenterLastContent = () => {
    return (
        <>
            <div className="bg-[#00A67E]" >
                <div className="grid rounded-[30px] place-items-center bg-[#007A5D] mr-20 ml-20 p-6 pb-20 pt-10">
                    <h1 className="flex text-center justify-center font-medium text-2xl landing-text text-white">= Earn badges and share it =</h1>
                    <p className="mt-2 landing-text text-white font-light text-center">Meanwhile you learn verbs you can earn special badges that reflect your progress, there are many badges you can earn, you can share it with your friends and compete</p>
                    <div className="grid place-items-center mt-12">
                        <img src={BadgeIMG} className="w-96" />
                    </div>
                </div>
                <div className='w-full bg-[#BBBBBB] py-2'>
                </div>
            </div>
        </>
    )
}