import Mark from "../../../src/assets/mark.svg"
const VerbListTable = () => {
    return (
        <>
            <div className="overflow-x-auto w-full py-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-center">Verb (infinitive)</th>
                            <th className="text-center">Past simple</th>
                            <th className="text-center">Past participle</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center rounded-[25px] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)]">
                            <td>
                                <div className="font-semibold">
                                    <span className="indicator-item badge bg-[#00A67E] border-none mr-2 transform translate-y-1"></span>
                                    Be (am/is/are)
                                </div>
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <th className="font-semibold text-center">Was(were)</th>
                            <th className="font-semibold text-center">Been</th>
                            <th className="font-semibold text-center">
                                <div className="tooltip" data-tip="Add to my verbs">
                                    <button className="btn mx-3 w-full bg-[#F9F9F9] border-none hover:bg-[#F9F9F9] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                                        <img src={Mark} className="w-5 h-10" />
                                    </button>
                                </div>
                            </th>
                        </tr>

                        <tr className="text-center rounded-[25px] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)]">
                            <td className="">
                                <div className="font-semibold">
                                    <span className="indicator-item badge bg-[#FABE2C] border-none mr-2 transform translate-y-1"></span>
                                    Break
                                </div>
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <th className="font-semibold text-center">Broke</th>
                            <th className="font-semibold text-center">Broken</th>
                            <th className="font-semibold text-center">
                                <div className="tooltip" data-tip="Add to my verbs">
                                    <button className="btn mx-3 w-full bg-[#F9F9F9] border-none hover:bg-[#F9F9F9] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                                        <img src={Mark} className="w-5 h-10" />
                                    </button>
                                </div>
                            </th>
                        </tr>

                        <tr className="text-center rounded-[25px] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)]">
                            <td>
                                <div className="font-semibold">
                                    <span className="indicator-item badge bg-[#6C63FF] border-none mr-2 transform translate-y-1"></span>
                                    Forbid
                                </div>
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <th className="font-semibold text-center">Forbade</th>
                            <th className="font-semibold text-center">Forbidden</th>
                            <th className="font-semibold text-center">
                                <div className="tooltip" data-tip="Add to my verbs">
                                    <button className="btn mx-3 w-full bg-[#F9F9F9] border-none hover:bg-[#F9F9F9] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                                        <img src={Mark} className="w-5 h-10" />
                                    </button>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default VerbListTable;