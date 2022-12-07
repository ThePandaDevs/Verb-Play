import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    return (
        <>
            <div class="navbar bg-[#FFFFFF] py-4 drop-shadow-[0_3px_1px_rgba(0,0,0,0.25)]">
                <div class="flex-none">
                    <label for="my-drawer" class="btn text-lg px-10 btn-ghost bg-white text-black mx-2 hover:bg-white drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 normal-case drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div class="flex-1">
                </div>
                <div class="flex-none">
                    <a onClick={() =>{
                        localStorage.clear()
                        navigate("/")
                    } } class="btn text-lg px-10 btn-ghost bg-white text-black mx-2 hover:bg-white drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 normal-case">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        Logout
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header;