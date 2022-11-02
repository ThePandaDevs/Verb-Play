import AuditoryIMG from '../../assets/auditory.svg'
import KinestheticIMG from '../../assets/kinesthetic.svg'
import VisualIMG from '../../assets/visual.svg'

export const TypeGame = () => {
  return(
      <div className="p-4">
          <h1 className="flex justify-center text-3xl font-bold mb-4">Game Mode</h1>
          <p className="flex justify-center font-light">
              Please, select a game mode according to the way you would like to play and learn
          </p>

          <div className="shadow p-6 rounded-lg mt-4">
              <div className="grid grid-flow-col auto-cols-auto">
                  <div className="grid items-center">
                      <h1 className="font-bold">Auditory</h1>
                      <p className="font-light text-sm">You store information by the way it sounds, and you have an easier time understanding spoken instructions than written ones.</p>
                  </div>
                  <div className="grid items-center justify-end ml-6">
                      <img src={AuditoryIMG} className="w-16"/>
                  </div>
              </div>
          </div>

          <div className="shadow p-6 rounded-lg mt-4">
              <div className="grid grid-flow-col auto-cols-auto">
                  <div className="grid items-center">
                      <h1 className="font-bold">Kinesthetic</h1>
                      <p className="font-light text-sm">You are a "hands-on" learner who prefers to touch, move, build, or draw what you learn.</p>
                  </div>
                  <div className="grid items-center justify-end ml-6">
                      <img src={KinestheticIMG} className="w-16"/>
                  </div>
              </div>
          </div>


          <div className="shadow p-6 rounded-lg mt-4">
              <div className="grid grid-flow-col auto-cols-auto">
                  <div className="grid items-center">
                      <h1 className="font-bold">Visual</h1>
                      <p className="font-light text-sm">You learn best by using methods that are primarily visual. You like to see what you are learning.</p>
                  </div>
                  <div className="grid items-center justify-end ml-6">
                      <img src={VisualIMG} className="w-16"/>
                  </div>
              </div>
          </div>


      </div>
  )
}