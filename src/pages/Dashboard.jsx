import Progress from "../components/dashboard/Progress";

const Dashboard = () => {
    return (
        <>
                <h2 className="card-title text-[#00A67E] font-bold text-3xl py-5">Dashboard</h2>
                <div className="grid grid-cols-1 justify-items-center content-around w-full bg-base-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-[25px] md:grid-cols-2 ">
                    <div className="card-body">
                        <h2 className="card-title text-[#00A67E] font-bold text-3xl">Welcome back YakuzaEnjoyer!</h2>
                        <p className="text-left">Keep it up and improve your verb skills!</p>
                    </div>
                </div>
                <Progress/>
                <h2 className="card-title text-[#00A67E] font-normal text-3xl py-5">Aditionals</h2>
                <button class="btn  btn-success mx-2 drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 ">Share with friends</button>
                <button class="btn  no-animation btn-success drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-1 transition duration-10">Share with friends</button>
        </>
    )
}

export default Dashboard;