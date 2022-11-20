import PeopleIMG from '../../assets/landing-people.svg'

export const FirstContent = () => {
    return (
        <>
            <div className="grid place-items-center grid-flow-col auto-cols-auto bg-[#009571] p-6 h-1/1">
                <div>
                    <h1 className="text-white font-medium landing-text text-2xl">Welcome to</h1>
                    <h1 className="text-white text-7xl font-bold landing-font">VerbPlay</h1>
                    <p className="text-white mt-2 landing-text text-xl font-light">Learn English verbs according to your learning style and at your own pace</p>
                    <button className="btn btn-ghost btn-wide bg-white  text-black mt-4 mx-2 hover:bg-white drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 normal-case">Let’s VerbPlay</button>
                </div>
                <div>
                    <img src={PeopleIMG} className="w-96 p-3" />
                </div>
            </div>
            <div className='w-full bg-[#BBBBBB] py-2'>
            </div>
        </>

    )
}