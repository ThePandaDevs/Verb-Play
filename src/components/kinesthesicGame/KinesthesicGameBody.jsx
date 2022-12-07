import {Report} from "notiflix/build/notiflix-report-aio";

const KinesthesicGameBody = ({verb,present,past,pastParticiple,setPresent,setPast,setPastParticiple,winSound,failureSound}) => {

    const checkWords = () =>{
        if (present==verb.english[0] && past == verb.english[1] && pastParticiple == verb.english[2]){
            winSound.play()
            Report.success('YEY! 🎉','All your answers were correct. 😁👌','Okay',()=>{location.reload(false)})
        }else {
            failureSound.play()
            Report.failure('Sorry! 😥','All your answers were incorrect.','I Can Do More')
        }
    }

    return (
        <>
            {
                verb != null ?
                    <>
                        <div className="w-full pt-10 flex justify-center" onClick={checkWords}>
                            <div
                                className="w-full md:w-2/3 lg:w-1/2 h-14 m-2 normal-case btn text-white bg-[#00A67E] hover:bg-[#00A67E] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none">
                                <p className="font-semibold text-lg text-left">{verb.spanish[0]} / {verb.spanish[1]} / {verb.spanish[2]}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                            <div
                                className="h-36 my-5 w-auto  card  bg-white border-none text-neutral-content hover:bg-white normal-case">
                                <div className="grid justify-items-center">
                                    <input value={present} onChange={(e)=>setPresent(e.target.value)} type="text" placeholder="? ? ?"
                                           className="input w-full max-w-xs text-black input-bordered text-center"/>
                                    <h2 className="card-title text-slate-400 pt-3">Present</h2>
                                </div>
                            </div>
                            <div
                                className="h-36 my-5 w-auto  card  bg-white border-none text-neutral-content hover:bg-white normal-case">
                                <div className="grid justify-items-center">
                                    <input value={past} onChange={(e)=>setPast(e.target.value)} type="text" placeholder="? ? ?"
                                           className="input w-full max-w-xs text-black input-bordered text-center"/>
                                    <h2 className="card-title text-slate-400 pt-3">Past</h2>
                                </div>
                            </div>
                            <div
                                className="h-36 my-5 w-auto  card  bg-white border-none text-neutral-content hover:bg-white normal-case">
                                <div className="grid justify-items-center">
                                    <input value={pastParticiple} onChange={(e)=>setPastParticiple(e.target.value)} type="text" placeholder="? ? ?"
                                           className="input w-full max-w-xs text-black input-bordered text-center"/>
                                    <h2 className="card-title text-slate-400 pt-3">Past Participle</h2>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <></>
            }

        </>
    )
}

export default KinesthesicGameBody;