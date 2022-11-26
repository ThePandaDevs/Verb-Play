import { Logo } from "../../../src/assets/logoNav.svg"

const NavBarLanding = () => {
    return (
        <>
            <div class="navbar bg-[#00A67E] py-5">
                <div class="navbar-start">
                    <div class="flex-none">
                        <img className="w-7/12 h-7/12 ml-3" src={Logo} />
                    </div>
                </div>

                <div className="navbar-end">
                    <div class="navbar-end hidden lg:flex">
                        <div class="flex-none">
                            <a href="/register" class="btn text-lg px-10 btn-ghost bg-[#00A67E] text-white  text-black mx-2 hover:bg-[#00A67E] drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 normal-case">
                                Register
                            </a>
                            <a href="/login" class="btn text-lg px-10 btn-ghost bg-white text-black mx-2 hover:bg-white drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 normal-case">
                                Login
                            </a>
                        </div>
                    </div>
                    <div class="dropdown dropdown-end">
                        <div className="flex">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </label>

                        </div>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a href="/register" class="btn text-lg m-2 btn-ghost bg-[#00A67E] text-white  text-black mx-2 hover:bg-[#00A67E] drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 normal-case">
                                    Register
                                </a></li>
                            <li>
                                <a href="/login" class="btn text-lg m-2 btn-ghost bg-white text-black mx-2 hover:bg-white drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 normal-case">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBarLanding;