import { Children } from "react"

const Drawer = ({ children }) => {
    return (
        <>
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {
                        children
                    }
                </div>
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>

                    <ul class="menu p-4 w-80 bg-base-100 text-base-content ">
                        <div className="flex justify-start py-5">
                            <img className="w-7/12 h-7/12 ml-3 text-center" src="../src/assets/logoDrawer.svg" />
                        </div>
                        <li className="pt-5">
                            <a href="/dashboard" className="text-lg btn-ghost bg-white text-black  active:drop-shadow-none hover:-translate-y-0 normal-case">
                                <svg class="w-6 h-6 mr-2 text-[#00A67E] fill-current" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 22.2222H17.7778V0H0V22.2222ZM0 40H17.7778V26.6667H0V40ZM22.2222 40H40V17.7778H22.2222V40ZM22.2222 0V13.3333H40V0H22.2222Z" />
                                </svg>
                                Dashboard
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="/dashboard" className="text-lg btn-ghost bg-white text-black  active:drop-shadow-none hover:-translate-y-0 normal-case">
                                <svg class="w-6 h-6 mr-2 text-[#00A67E] fill-current" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26 11V0H14V11L20 17L26 11ZM11 14H0V26H11L17 20L11 14ZM14 29V40H26V29L20 23L14 29ZM29 14L23 20L29 26H40V14H29Z" />
                                </svg>

                                Let's VerbPlay!
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="/verblist" className="text-lg btn-ghost bg-white text-black  active:drop-shadow-none hover:-translate-y-0 normal-case">
                                <svg class="w-6 h-6 mr-2 text-[#00A67E] fill-current" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.5556 4.44444V35.5556H4.44444V4.44444H35.5556ZM38 0H2C0.888889 0 0 0.888889 0 2V38C0 38.8889 0.888889 40 2 40H38C38.8889 40 40 38.8889 40 38V2C40 0.888889 38.8889 0 38 0ZM17.7778 8.88889H31.1111V13.3333H17.7778V8.88889ZM17.7778 17.7778H31.1111V22.2222H17.7778V17.7778ZM17.7778 26.6667H31.1111V31.1111H17.7778V26.6667ZM8.88889 8.88889H13.3333V13.3333H8.88889V8.88889ZM8.88889 17.7778H13.3333V22.2222H8.88889V17.7778ZM8.88889 26.6667H13.3333V31.1111H8.88889V26.6667Z" />
                                </svg>
                                Verb list
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="/my-verblist" className="text-lg btn-ghost bg-white text-black  active:drop-shadow-none hover:-translate-y-0 normal-case">
                                <svg class="w-6 h-6 mr-2 text-[#00A67E] fill-current" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.8571 11.4286H0V17.1429H22.8571V11.4286ZM22.8571 0H0V5.71429H22.8571V0ZM0 28.5714H15.2381V22.8571H0V28.5714ZM37.1429 15.7143L40 20L26.6857 40L18.0952 27.1429L20.9524 22.8571L26.6857 31.4286L37.1429 15.7143Z" />
                                </svg>

                                My verbs
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="/badges" className="text-lg btn-ghost bg-white text-black  active:drop-shadow-none hover:-translate-y-0 normal-case">
                                <svg class="w-6 h-6 mr-2  text-[#00A67E] fill-current" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.98 0C8.94 0 0 8.96 0 20C0 31.04 8.94 40 19.98 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 19.98 0ZM28.46 32L20 26.9L11.54 32L13.78 22.38L6.32 15.92L16.16 15.08L20 6L23.84 15.06L33.68 15.9L26.22 22.36L28.46 32Z" />
                                </svg>

                                My badges
                            </a>
                        </li>
                        <li className="py-2">
                            <a href="/settings-profile" className="text-lg btn-ghost bg-white text-black  active:drop-shadow-none hover:-translate-y-0 normal-case">
                                <svg class="w-6 h-6 mr-2 text-[#00A67E] fill-current" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.2924 21.9583C35.378 21.3333 35.4209 20.6875 35.4209 20C35.4209 19.3333 35.378 18.6667 35.2709 18.0417L39.6188 14.75C40.0043 14.4583 40.1114 13.8958 39.8758 13.4792L35.7635 6.5625C35.5065 6.10417 34.9711 5.95833 34.4999 6.10417L29.381 8.10417C28.3101 7.3125 27.175 6.64583 25.9113 6.14583L25.1403 0.854166C25.0546 0.354166 24.6263 0 24.1122 0H15.8878C15.3737 0 14.9668 0.354166 14.8811 0.854166L14.1101 6.14583C12.8464 6.64583 11.6899 7.33333 10.6404 8.10417L5.52152 6.10417C5.05033 5.9375 4.51489 6.10417 4.25787 6.5625L0.16706 13.4792C-0.0899543 13.9167 -0.00428307 14.4583 0.424074 14.75L4.7719 18.0417C4.66481 18.6667 4.57914 19.3542 4.57914 20C4.57914 20.6458 4.62197 21.3333 4.72906 21.9583L0.381238 25.25C-0.00428304 25.5417 -0.111372 26.1042 0.124224 26.5208L4.23645 33.4375C4.49347 33.8958 5.02891 34.0417 5.50011 33.8958L10.619 31.8958C11.6899 32.6875 12.825 33.3542 14.0887 33.8542L14.8597 39.1458C14.9668 39.6458 15.3737 40 15.8878 40H24.1122C24.6263 40 25.0546 39.6458 25.1189 39.1458L25.8899 33.8542C27.1536 33.3542 28.3101 32.6875 29.3596 31.8958L34.4785 33.8958C34.9497 34.0625 35.4851 33.8958 35.7421 33.4375L39.8544 26.5208C40.1114 26.0625 40.0043 25.5417 39.5973 25.25L35.2924 21.9583ZM20 27.5C15.7593 27.5 12.2896 24.125 12.2896 20C12.2896 15.875 15.7593 12.5 20 12.5C24.2407 12.5 27.7104 15.875 27.7104 20C27.7104 24.125 24.2407 27.5 20 27.5Z" />
                                </svg>

                                Settings
                            </a>
                        </li>
                        <img className="pt-10" src="../src/assets/trial.svg" />
                        <li >
                            <a className="grid -translate-y-[70px] text-center text-lg bg-[#00A67E] text-white text-black hover:bg-[#00A67E] drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none normal-case">
                                Upgrade plan
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Drawer;