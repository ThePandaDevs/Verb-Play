import OneIMG from "../../assets/auditory.svg";
import TwoIMG from "../../assets/kinesthetic.svg";
import ThreeIMG from "../../assets/visual.svg";

export const CenterFirstContent = () => {
  return(
      <div className="grid place-items-center p-6">
          <div>
              <h1 className="flex justify-center font-medium text-2xl landing-text">Game Modes</h1>
              <p className="mt-2 landing-text text-center">Learn English verbs according to your learning style and at your own pace</p>
          </div>
          <div className="grid place-items-center grid-flow-col auto-cols-auto p-4 mt-4">
              <div className="mr-3 ml-3">
                  <h1 className="font-bold flex justify-center landing-text">Visual</h1>
                  <p className="font-light flex justify-center landing-text">Learn by seeing and relating patterns</p>
                  <div className="flex justify-center mt-2">
                      <img src={OneIMG} className="w-24"/>
                  </div>
              </div>
              <div className="mr-3 ml-3">
                  <h1 className="font-bold flex justify-center landing-text">Auditory</h1>
                  <p className="font-light flex justify-center landing-text">Learn by listening and talking</p>
                  <div className="flex justify-center mt-2">
                      <img src={TwoIMG} className="w-24"/>
                  </div>
              </div>
              <div className="mr-3 ml-3">
                  <h1 className="font-bold flex justify-center landing-text">Kinesthetic</h1>
                  <p className="font-light flex justify-center landing-text">Learn by touching and experimenting</p>
                  <div className="flex justify-center mt-2">
                      <img src={ThreeIMG} className="w-24"/>
                  </div>
              </div>
          </div>
      </div>
  )
}