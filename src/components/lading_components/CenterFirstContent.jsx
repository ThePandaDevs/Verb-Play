import OneIMG from "../../assets/auditory.svg";
import TwoIMG from "../../assets/kinesthetic.svg";
import ThreeIMG from "../../assets/visual.svg";
import Grass from "../../../src/assets/game-mode.svg"

export const CenterFirstContent = () => {
    return (
        <div className="grid place-items-center pt-10">
            <div className="w-auto mx-5">
                <h1 className="flex justify-center font-medium text-2xl landing-text">Game Modes</h1>
                <p className="mt-2 mx-3 landing-text text-lg text-center">The way you learn is important to us, for this reason we have prepared different modes to make your learning as comfortable as possible.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center p-4 mt-10">
                <div className="mr-3 ml-3 mt-5">
                    <h1 className="font-bold flex justify-center landing-text">Visual</h1>
                    <p className="font-light flex justify-center landing-text text-center">Learn by seeing and relating patterns</p>
                    <div className="flex justify-center mt-2">
                        <img src={OneIMG} className="w-24 mt-5" />
                    </div>
                </div>
                <div className="mr-3 ml-3 mt-5">
                    <h1 className="font-bold flex justify-center landing-text">Auditory</h1>
                    <p className="font-light flex justify-center landing-text text-center">Learn by listening and talking</p>
                    <div className="flex justify-center mt-2">
                        <img src={TwoIMG} className="w-24 mt-5" />
                    </div>
                </div>
                <div className="mr-3 ml-3 mt-5">
                    <h1 className="font-bold flex justify-center landing-text">Kinesthetic</h1>
                    <p className="font-light flex justify-center landing-text text-center">Learn by touching and experimenting</p>
                    <div className="flex justify-center mt-2">
                        <img src={ThreeIMG} className="w-24 mt-5 " />
                    </div>
                </div>
            </div>
            <img src={Grass} className="w-full p-0" />
        </div>
    )
}