import { LeftContentRegister } from "../components/register_components/LeftContentRegister";
import BackgroundGif from "../../src/assets/circles.gif"

const Register = () => {
    return (
        <div className="place-items-center" style={{ backgroundImage: URL(BackgroundGif) }}>
            <div class="navbar bg-[#00A67E]">
                <div class="navbar-start">
                    <div class="flex-none">
                        <img className="w-7/12 h-7/12 ml-3" src="../src/assets/logoNav.svg" />
                    </div>
                </div>
            </div>
            <div className="grid pt-10">
                <LeftContentRegister />
            </div>
            <img src="../src/assets/game-mode.svg" className="w-full p-0" />
        </div>
    )
}

export default Register;