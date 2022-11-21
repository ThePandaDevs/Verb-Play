import { LeftContentLogin } from "../components/login_components/LeftContentLogin";
import { RightContentLogin } from "../components/login_components/RightContentLogin";

export const Login = () => {
    return (
        <div className="place-items-center">
            <div class="navbar bg-[#00A67E]">
                <div class="navbar-start">
                    <div class="flex-none">
                        <img className="w-7/12 h-7/12 ml-3" src="../src/assets/logoNav.svg" />
                    </div>
                </div>
            </div>
            <div className="grid pt-10">
                <LeftContentLogin />
            </div>
            <img src="../src/assets/game-mode.svg" className="w-full fixed bottom-0" />
        </div>
    )
}