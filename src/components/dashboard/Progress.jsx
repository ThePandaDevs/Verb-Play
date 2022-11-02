
const Progress = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 py-5">
            <div className=" w-auto mr-0 my-5 bg-base-100 image-full hero drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-[25px] md:mr-10" style={{ backgroundImage: "url(../src/assets/confetti.gif" }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-semibold text-black z-40 ">¡Congratulations!</h1>
                        <h1 className="mb-5 text-6xl font-bold text-black">32</h1>
                        <p className="mb-5 text-black text-lg">You have completed all these verbs</p>
                    </div>
                </div>
            </div>
            <div className="p-5 w-auto my-5 bg-base-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] rounded-[25px]">
                <h1 className="text-left text-black font-bold">Your level progress</h1>
                <div className="grid grid-cols-1">
                    <div className="flex items-center justify-around">
                        <svg className="w-12 h-12" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="72" height="72" rx="10" fill="#00A67E" />
                            <path d="M35.54 32.336C35.092 31.5147 34.476 30.8893 33.692 30.46C32.908 30.0307 31.9933 29.816 30.948 29.816C29.7907 29.816 28.764 30.0773 27.868 30.6C26.972 31.1227 26.272 31.8693 25.768 32.84C25.264 33.8107 25.012 34.9307 25.012 36.2C25.012 37.5067 25.264 38.6453 25.768 39.616C26.2907 40.5867 27.0093 41.3333 27.924 41.856C28.8387 42.3787 29.9027 42.64 31.116 42.64C32.6093 42.64 33.832 42.248 34.784 41.464C35.736 40.6613 36.3613 39.5507 36.66 38.132H29.94V35.136H40.524V38.552C40.2627 39.9147 39.7027 41.1747 38.844 42.332C37.9853 43.4893 36.8747 44.4227 35.512 45.132C34.168 45.8227 32.656 46.168 30.976 46.168C29.0907 46.168 27.3827 45.748 25.852 44.908C24.34 44.0493 23.1453 42.864 22.268 41.352C21.4093 39.84 20.98 38.1227 20.98 36.2C20.98 34.2773 21.4093 32.56 22.268 31.048C23.1453 29.5173 24.34 28.332 25.852 27.492C27.3827 26.6333 29.0813 26.204 30.948 26.204C33.1507 26.204 35.064 26.7453 36.688 27.828C38.312 28.892 39.432 30.3947 40.048 32.336H35.54ZM42.5002 29.2V25.588H49.2482V46H45.2162V29.2H42.5002Z" fill="white" />
                        </svg>
                        <h1 className="text-center mx-3">Group</h1>
                        <progress className="progress progress-success " value="78" max="100"></progress>
                        <h1 className="text-center mx-3 text-[#00BFA6]">78%</h1>
                    </div>
                    <div className="flex items-center justify-around">
                        <svg className="w-12 h-12" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="72" height="72" rx="10" fill="#FABE2C" />
                            <path d="M32.54 32.336C32.092 31.5147 31.476 30.8893 30.692 30.46C29.908 30.0307 28.9933 29.816 27.948 29.816C26.7907 29.816 25.764 30.0773 24.868 30.6C23.972 31.1227 23.272 31.8693 22.768 32.84C22.264 33.8107 22.012 34.9307 22.012 36.2C22.012 37.5067 22.264 38.6453 22.768 39.616C23.2907 40.5867 24.0093 41.3333 24.924 41.856C25.8387 42.3787 26.9027 42.64 28.116 42.64C29.6093 42.64 30.832 42.248 31.784 41.464C32.736 40.6613 33.3613 39.5507 33.66 38.132H26.94V35.136H37.524V38.552C37.2627 39.9147 36.7027 41.1747 35.844 42.332C34.9853 43.4893 33.8747 44.4227 32.512 45.132C31.168 45.8227 29.656 46.168 27.976 46.168C26.0907 46.168 24.3827 45.748 22.852 44.908C21.34 44.0493 20.1453 42.864 19.268 41.352C18.4093 39.84 17.98 38.1227 17.98 36.2C17.98 34.2773 18.4093 32.56 19.268 31.048C20.1453 29.5173 21.34 28.332 22.852 27.492C24.3827 26.6333 26.0813 26.204 27.948 26.204C30.1507 26.204 32.064 26.7453 33.688 27.828C35.312 28.892 36.432 30.3947 37.048 32.336H32.54ZM41.2082 41.576C43.0002 40.0827 44.4282 38.8413 45.4922 37.852C46.5562 36.844 47.4429 35.7987 48.1522 34.716C48.8615 33.6333 49.2162 32.5693 49.2162 31.524C49.2162 30.572 48.9922 29.8253 48.5442 29.284C48.0962 28.7427 47.4055 28.472 46.4722 28.472C45.5389 28.472 44.8202 28.7893 44.3162 29.424C43.8122 30.04 43.5509 30.8893 43.5322 31.972H39.7242C39.7989 29.732 40.4615 28.0333 41.7122 26.876C42.9815 25.7187 44.5869 25.14 46.5282 25.14C48.6562 25.14 50.2895 25.7093 51.4282 26.848C52.5669 27.968 53.1362 29.452 53.1362 31.3C53.1362 32.756 52.7442 34.1467 51.9602 35.472C51.1762 36.7973 50.2802 37.9547 49.2722 38.944C48.2642 39.9147 46.9482 41.0907 45.3242 42.472H53.5842V45.72H39.7522V42.808L41.2082 41.576Z" fill="white" />
                        </svg>
                        <h1 className="text-center mx-3">Group</h1>
                        <progress className="progress progress-warning " value="56" max="100"></progress>
                        <h1 className="text-center mx-3 text-[#FABE2C]">56%</h1>
                    </div>
                    <div className="flex items-center justify-around">
                        <svg className="w-12 h-12" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="72" height="72" rx="10" fill="#6C63FF" />
                            <path d="M31.54 32.336C31.092 31.5147 30.476 30.8893 29.692 30.46C28.908 30.0307 27.9933 29.816 26.948 29.816C25.7907 29.816 24.764 30.0773 23.868 30.6C22.972 31.1227 22.272 31.8693 21.768 32.84C21.264 33.8107 21.012 34.9307 21.012 36.2C21.012 37.5067 21.264 38.6453 21.768 39.616C22.2907 40.5867 23.0093 41.3333 23.924 41.856C24.8387 42.3787 25.9027 42.64 27.116 42.64C28.6093 42.64 29.832 42.248 30.784 41.464C31.736 40.6613 32.3613 39.5507 32.66 38.132H25.94V35.136H36.524V38.552C36.2627 39.9147 35.7027 41.1747 34.844 42.332C33.9853 43.4893 32.8747 44.4227 31.512 45.132C30.168 45.8227 28.656 46.168 26.976 46.168C25.0907 46.168 23.3827 45.748 21.852 44.908C20.34 44.0493 19.1453 42.864 18.268 41.352C17.4093 39.84 16.98 38.1227 16.98 36.2C16.98 34.2773 17.4093 32.56 18.268 31.048C19.1453 29.5173 20.34 28.332 21.852 27.492C23.3827 26.6333 25.0813 26.204 26.948 26.204C29.1507 26.204 31.064 26.7453 32.688 27.828C34.312 28.892 35.432 30.3947 36.048 32.336H31.54ZM39.0322 30.964C39.1255 29.0973 39.7789 27.66 40.9922 26.652C42.2242 25.6253 43.8389 25.112 45.8362 25.112C47.1989 25.112 48.3655 25.3547 49.3362 25.84C50.3069 26.3067 51.0349 26.9507 51.5202 27.772C52.0242 28.5747 52.2762 29.4893 52.2762 30.516C52.2762 31.692 51.9682 32.6907 51.3522 33.512C50.7549 34.3147 50.0362 34.856 49.1962 35.136V35.248C50.2789 35.584 51.1189 36.1813 51.7162 37.04C52.3322 37.8987 52.6402 39 52.6402 40.344C52.6402 41.464 52.3789 42.4627 51.8562 43.34C51.3522 44.2173 50.5962 44.908 49.5882 45.412C48.5989 45.8973 47.4042 46.14 46.0042 46.14C43.8949 46.14 42.1775 45.608 40.8522 44.544C39.5269 43.48 38.8269 41.912 38.7522 39.84H42.5602C42.5975 40.7547 42.9055 41.492 43.4842 42.052C44.0815 42.5933 44.8935 42.864 45.9202 42.864C46.8722 42.864 47.6002 42.6027 48.1042 42.08C48.6269 41.5387 48.8882 40.848 48.8882 40.008C48.8882 38.888 48.5335 38.0853 47.8242 37.6C47.1149 37.1147 46.0135 36.872 44.5202 36.872H43.7082V33.652H44.5202C47.1709 33.652 48.4962 32.7653 48.4962 30.992C48.4962 30.1893 48.2535 29.564 47.7682 29.116C47.3015 28.668 46.6202 28.444 45.7242 28.444C44.8469 28.444 44.1655 28.6867 43.6802 29.172C43.2135 29.6387 42.9429 30.236 42.8682 30.964H39.0322Z" fill="white" />
                        </svg>
                        <h1 className="text-center px-3">Group</h1>
                        <progress className="progress progress-primary " value="30" max="100"></progress>
                        <h1 className="text-center mx-3 text-[#6C63FF]">30%</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress;