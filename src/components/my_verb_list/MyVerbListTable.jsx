
const MyVerbListTable = () => {
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
                                        <svg className="w-5 h-10" viewBox="0 0 392 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.918915" width="392" height="74.1622" rx="20" fill="white" />
                                            <path d="M196 0.918915H372C383.046 0.918915 392 9.87322 392 20.9189V55.0811C392 66.1268 383.046 75.0811 372 75.0811H196V0.918915Z" fill="#D9D9D9" />
                                        </svg>
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
                                        <svg className="w-5 h-10" viewBox="0 0 392 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.918915" width="392" height="74.1622" rx="20" fill="white" />
                                            <path d="M196 0.918915H372C383.046 0.918915 392 9.87322 392 20.9189V55.0811C392 66.1268 383.046 75.0811 372 75.0811H196V0.918915Z" fill="#D9D9D9" />
                                        </svg>
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
                                <div className="tooltip" data-tip="Remove to my verbs">
                                    <button className="btn mx-3 w-full bg-[#F9F9F9] border-none hover:bg-[#F9F9F9] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                                        <svg className="w-5 h-10" viewBox="0 0 392 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.918915" width="392" height="74.1622" rx="20" fill="white" />
                                            <path d="M196 0.918915H372C383.046 0.918915 392 9.87322 392 20.9189V55.0811C392 66.1268 383.046 75.0811 372 75.0811H196V0.918915Z" fill="#D9D9D9" />
                                        </svg>
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

export default MyVerbListTable;