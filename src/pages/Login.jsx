import { LeftContentLogin } from "../components/login_components/LeftContentLogin";
import BackgroundGif from "../../src/assets/circles.gif"
import Logo from "../../src/assets/logoNav.svg"
import Cesped from "../../src/assets/game-mode.svg"

const Login = () => {
    return (
        <div className="place-items-center" style={{ backgroundImage: `url(${BackgroundGif})` }}>
            <div class="navbar bg-[#00A67E]">
                <div class="navbar-start">
                    <div class="flex-none">
                        <img className="w-7/12 h-7/12 ml-3" src={Logo} />
                    </div>
                </div>
            </div>
            <div className="grid pt-10">
                <LeftContentLogin />
            </div>
            <img src={Cesped} className="w-full fixed bottom-0" />
        </div>
    )
}

export default Login;