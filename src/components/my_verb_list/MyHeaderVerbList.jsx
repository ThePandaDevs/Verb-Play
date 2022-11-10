import { MdSearch } from "react-icons/md";
const MyHeaderVerbList = () => {
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
                    <div className="tooltip" data-tip="Let´s VerbPlay!">
                        <button className="btn mx-3 bg-[#00A67E] border-none hover:bg-[#00A67E] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                            <svg  className="w-5 h-10" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44.7643 22.8077C47.9879 24.752 47.9879 29.4266 44.7643 31.3708L20.5482 45.9762C17.2157 47.9861 12.9658 45.5863 12.9658 41.6947L12.9658 12.4839C12.9658 8.5923 17.2157 6.19249 20.5482 8.20236L44.7643 22.8077Z" fill="white" />
                                <path d="M25.9316 11.8929V42.2857C31.4964 39.0622 43.5563 32.0627 47.2783 29.8523C51.0002 27.6419 48.8291 25.4315 47.2783 24.6026L25.9316 11.8929Z" fill="#D9D9D9" stroke="#D9D9D9" />
                            </svg>

                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MyHeaderVerbList;