import ZeroIMG from "../../assets/zero.svg";
import FiveIMG from "../../assets/five.svg";
import GoldIMG from "../../assets/gold.svg";
import CheckIMG from "../../assets/check.svg";

export const LastContent = () => {
    return (
        <div>
            <div className="grid place-items-center p-6 pt-10">
                <h1 className="flex text-center justify-center font-medium text-2xl landing-text">¡Simple plans for everyone!</h1>
                <p className="mt-2 landing-text font-light text-center">Choose the plan you like it, make sure read all benefits that your selected plan includes, we have specific plans for specific users</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-6 ">
                <div className="grid place-items-center shadow rounded-lg p-6 m-2 bg-white">
                    <h1 className="flex text-center justify-center font-medium text-md landing-text">Individual</h1>
                    <div className="flex mt-2">
                        <p className="mt-2 landing-text font-bold text-2xl text-center">$0</p>
                        <p className="mt-2 landing-text font-light text-2xl text-center">/trial</p>
                    </div>
                    <p className="mt-2 landing-text font-light text-sm text-center">For those people who wants to experiment with our app</p>
                    <div className="grid place-items-center mt-5">
                        <img src={ZeroIMG} className="w-12" />
                    </div>
                    <div className="mt-2">
                        <div className="flex mt-3">
                            <img src={CheckIMG} className="w-6" />
                            <p className="landing-text font-light text-sm ml-3 flex items-center">Individual</p>
                        </div>
                        <div className="flex mt-3">
                            <img src={CheckIMG} className="w-6" />
                            <p className="landing-text font-light text-sm ml-3 flex items-center">Includes diferent game modes</p>
                        </div>
                        <div className="flex mt-3">
                            <img src={CheckIMG} className="w-6" />
                            <p className="landing-text font-light text-sm ml-3 flex items-center">Custom list learning</p>
                        </div>
                    </div>
                    <button className="btn btn-ghost normal-case btn-wide bg-white text-black mt-4 mx-2 hover:bg-white drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">Choose plan</button>
                </div>

                <div className="grid place-items-center shadow rounded-lg p-6 m-2 bg-white">
                    <h1 className="flex text-center justify-center font-medium text-md landing-text">Individual supporter</h1>
                    <div className="flex mt-2">
                        <p className="mt-2 landing-text font-bold text-2xl text-center">$5</p>
                        <p className="mt-2 landing-text font-light text-2xl text-center">/trial</p>
                    </div>
                    <p className="mt-2 landing-text font-light text-sm text-center">For those people who wants to support us and enjoy our app</p>
                    <div className="grid place-items-center mt-5">
                        <img src={FiveIMG} className="w-12" />
                    </div>
                    <div className="mt-2">
                        <div className="flex mt-3">
                            <img src={CheckIMG} className="w-6" />
                            <p className="landing-text font-light text-sm ml-3 flex items-center">All of the above without trial</p>
                        </div>
                        <div className="flex mt-3">
                            <img src={CheckIMG} className="w-6" />
                            <p className="landing-text font-light text-sm ml-3 flex items-center">Earn unique badges</p>
                        </div>
                        <div className="flex mt-3">
                            <img src={CheckIMG} className="w-6" />
                            <p className="landing-text font-light text-sm ml-3 flex items-center">You can share your progress</p>
                        </div>
                    </div>
                    <button className="btn btn-ghost btn-wide bg-white text-black mt-4 mx-2 hover:bg-white drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">Choose plan</button>
                </div>

                <div className="grid place-items-center shadow rounded-lg p-6 m-2 bg-white">
                    <h1 className="flex text-center justify-center font-medium text-md landing-text">School/academy</h1>
                    <div className="flex mt-2">
                        <p className="mt-2 landing-text font-bold text-2xl text-center">$Special</p>
                        <p className="mt-2 landing-text font-light text-2xl text-center ml-2">for students</p>
                    </div>
                    <p className="mt-2 landing-text font-light text-sm text-center">For those who want to learn in a group and need the supervision of a teacher</p>
                    <div className="grid place-items-center mt-5">
                        <img src={GoldIMG} className="w-12" />
                    </div>
                    <div className="mt-2">
                        <div className="flex mt-3">
                            <img src={CheckIMG} className="w-6" />
                            <p className="landing-text font-light text-sm ml-3 flex items-center">All of the above</p>
                        </div>
                        <div className="flex mt-3">
                            <img src={CheckIMG} className="w-6" />
                            <p className="landing-text font-light text-sm ml-3 flex items-center">Custom student groups</p>
                        </div>
                        <div className="flex mt-3">
                            <img src={CheckIMG} className="w-6" />
                            <p className="landing-text font-light text-sm ml-3 flex items-center">Statistics about the group</p>
                        </div>
                    </div>
                    <button className="btn btn-ghost btn-wide bg-white text-black mt-4 mx-2 hover:bg-white drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">Choose plan</button>
                </div>

            </div>

        </div>
    )
}