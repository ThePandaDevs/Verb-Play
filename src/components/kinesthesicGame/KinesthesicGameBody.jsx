
const KinesthesicGameBody = () => {
    return (
        <>
            <div className="w-full pt-10 flex justify-center">
                <div className="w-full md:w-2/3 lg:w-1/2 h-14 m-2 normal-case btn text-white bg-[#00A67E] hover:bg-[#00A67E] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none">
                    <p className="font-semibold text-lg text-left">Alcanzar / Alcancé / Alcanzado</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
                <div className="h-36 my-5 w-auto  card  bg-white border-none text-neutral-content hover:bg-white normal-case">
                    <div className="grid justify-items-center">
                        <input type="text" placeholder="? ? ?" class="input w-full max-w-xs text-black input-bordered text-center" />
                        <h2 className="card-title text-slate-400 pt-3">Present</h2>
                    </div>
                </div>
                <div className="h-36 my-5 w-auto  card  bg-white border-none text-neutral-content hover:bg-white normal-case">
                    <div className="grid justify-items-center">
                        <input type="text" placeholder="? ? ?" class="input w-full max-w-xs text-black input-bordered text-center" />
                        <h2 className="card-title text-slate-400 pt-3">Past</h2>
                    </div>
                </div>
                <div className="h-36 my-5 w-auto  card  bg-white border-none text-neutral-content hover:bg-white normal-case">
                    <div className="grid justify-items-center">
                        <input type="text" placeholder="? ? ?" class="input w-full max-w-xs text-black input-bordered text-center" />
                        <h2 className="card-title text-slate-400 pt-3">Past Participle</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KinesthesicGameBody;