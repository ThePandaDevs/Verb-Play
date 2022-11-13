const ProgressCourses = () => {
    return (
        <>
            <p className="text-xl font-bold mt-10 text-start">Esmeralda's progress groups</p>
                <div className="flex flex-row justify-between mt-10">
                    <div className="bg-[#00A67E] h-10 w-10 rounded-md items-center">
                        <p className="text-[#ffff] font-semibold mt-2">G1</p>
                    </div>
                    <p className="self-center">Group 1</p>
                    <progress className="progress progress-accent w-80 self-center" value="95" max="100"></progress>
                    <p className="self-center">95%</p>
                </div>
                <div className="flex flex-row justify-between mt-6">
                    <div className="bg-[#FABE2C] h-10 w-10 rounded-md items-center rounded-md">
                        <p className="text-[#ffff] font-semibold mt-2">G2</p>
                    </div>
                    <p className="self-center">Group 2</p>
                    <progress className="progress progress-warning w-80 self-center" value="40" max="100"></progress>
                    <p className="self-center">40%</p>
                </div>
                <div className="flex flex-row justify-between mt-6">
                    <div className="bg-[#6C63FF] h-10 w-10 rounded-md items-center">
                        <p className="text-[#ffff] font-semibold mt-2">G3</p>
                    </div>
                    <p className="self-center">Group 3</p>
                    <progress className="progress progress-primary w-80 self-center" value="15" max="100"></progress>
                    <p className="self-center">15%</p>
                </div>
        </>
    )
}

export default ProgressCourses;