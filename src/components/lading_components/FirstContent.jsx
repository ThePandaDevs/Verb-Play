import PeopleIMG from '../../assets/landing-people.svg'

export const FirstContent = () => {
  return(
      <div className="grid place-items-center grid-flow-col auto-cols-auto bg-[#009571] p-6">
          <div>
              <h1 className="text-white font-semibold landing-text">Welcome to</h1>
              <h1 className="text-white text-7xl font-bold landing-font">VerbPlay</h1>
              <p className="text-white mt-2 landing-text">Learn English verbs according to your learning style and at your own pace</p>
              <button className="btn btn-ghost btn-wide bg-white text-black mt-4 mx-2 drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">Let’s verbPlay</button>
          </div>
          <div>
              <img src={PeopleIMG} className="w-96"/>
          </div>
      </div>
  )
}