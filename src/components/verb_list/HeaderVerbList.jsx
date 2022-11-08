import { MdSearch } from "react-icons/md";
const HeaderVerbList = () => {
    return (
        <>
            <h2 className="card-title text-[#00A67E] font-bold text-3xl py-5">Verb List</h2>
            <div className="p-5 grid  grid-cols-1 w-full bg-base-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-[25px] md:grid-cols-2 ">

                <div className="flex justify-center md:justify-start">
                    <MdSearch size={50} className="mr-2 text-slate-200" />
                    <div className="btn-group">
                        <input type="text" placeholder="Type your verb here" className="input w-full bg-[#F4F4F4] normal-case " />
                        <button className="btn bg-[#00A67E] border-none hover:bg-[#00A67E] normal-case border-none ">Search <MdSearch size={20} className="ml-2" /></button>
                    </div>
                </div>

                <div className="flex flex-row justify-around py-3 md:justify-end md:py-0 lg:justify-end lg:py-0">

                    <div className="tooltip" data-tip="Filter by group 1">
                        <button className="btn mx-1 bg-[#00A67E] border-none hover:bg-[#00A67E] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">G1</button>

                    </div>
                    <div className="tooltip" data-tip="Filter by group 2">
                        <button className="btn mx-1 bg-[#FABE2C] border-none hover:bg-[#FABE2C] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">G2</button>

                    </div>
                    <div className="tooltip" data-tip="Filter by group 3">
                        <button className="btn mx-1 bg-[#6C63FF] border-none hover:bg-[#6C63FF] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">G3</button>

                    </div>
                    <div className="tooltip" data-tip="My verbs saved">
                        <button className="btn mx-3 bg-[#00A67E] border-none hover:bg-[#00A67E] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                            <img src="../src/assets/mark.svg" className="w-5 h-10" />
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeaderVerbList;