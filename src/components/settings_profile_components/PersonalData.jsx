const PersonalData = ({user}) => {
    return (
        <>
            <div className="flex basis-2/5 flex-col bg-[#00A67E] shadow-md m-3 rounded-lg">
                <div className="avatar self-center">
                    <div className="w-36 rounded-full mt-10 bg-white shadow-lg p-2">
                        <img src={`https://avatars.dicebear.com/api/big-smile/${user.userName}.svg`} />
                    </div>
                </div>
                <p className="text-xl font-bold text-[#ffff] mt-10 text-center">{user.name} {user.lastName}</p>
                <p className="text-lg text-[#ffff] text-center">@{user.userName}</p>
                <div className="flex flex-row justify-around">
                    <div className="flex-col">

                        <p className="text-xl font-bold text-[#ffff] mt-10">📌Location</p>
                        <p className="text-lg text-[#ffff] text-center">Mexico</p>
                    </div>
                    <div className="flex-col">
                        <p className="text-xl font-bold text-[#ffff] mt-10">🎂Birthday</p>
                        <p className="text-lg text-[#ffff] text-center">27/05/2001</p>
                    </div>
                </div>
                <label className="btn gap-2 bg-white border-white text-current drop-shadow-xl w-[45%] self-center my-20" htmlFor="my-modal">
                    <svg width="14" height="14" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 19.7924V25H5.20761L20.5666 9.64102L15.359 4.43341L0 19.7924ZM24.5938 5.6138C25.1354 5.07221 25.1354 4.19733 24.5938 3.65574L21.3443 0.406194C20.8027 -0.135398 19.9278 -0.135398 19.3862 0.406194L16.8449 2.94751L22.0525 8.15512L24.5938 5.6138Z" fill="black" />
                    </svg>
                    <p className="text-current">Change information</p>
                </label>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-3xl">
                    <div className="avatar self-center drop-shadow-lg">
                        <div className="w-36 rounded-full mt-10 bg-white shadow-lg p-2">
                            <img src={`https://avatars.dicebear.com/api/big-smile/${user.userName}.svg`} />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center">
                        <div className="w-1/2 px-4">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Nombre(s)</span>
                                </label>
                                <input type="text" placeholder="Esmeralda" className="input input-bordered input-accent w-full max-w-xs" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Fecha de nacimiento</span>
                                </label>
                                <input type="date" className="input input-bordered input-accent w-full max-w-xs" />
                                <label className="label">
                                    {/* {<span className="label-text-alt">Alt label</span>
                                }<span className="label-text-alt">Alt label</span> */}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Correo electrónico</span>
                                </label>
                                <input type="email" placeholder="esme@gmail.com" className="input input-bordered input-accent w-full max-w-xs" />
                                <label className="label">
                                </label>
                            </div>
                        </div>
                        <div className="w-1/2 px-4">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Apellido(s)</span>
                                </label>
                                <input type="text" placeholder="Lara Arroyo" className="input input-bordered input-accent w-full max-w-xs" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Nombre de usuario</span>
                                </label>
                                <input type="text" placeholder="EsmeraldaLara12" className="input input-bordered input-accent w-full max-w-xs" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Contraseña</span>
                                </label>
                                <input type="password" placeholder="********" className="input input-bordered input-accent w-full max-w-xs" />
                                <label className="label">
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action self-start mr-6">
                        <label htmlFor="my-modal" className="gap-2 btn bg-[#00A67E] border-[#00A67E] drop-shadow-lg">
                            <svg width="14" height="14" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.8889 0H2.55556C1.13722 0 0 1.15 0 2.55556V20.4444C0 21.85 1.13722 23 2.55556 23H20.4444C21.85 23 23 21.85 23 20.4444V5.11111L17.8889 0ZM11.5 20.4444C9.37889 20.4444 7.66667 18.7322 7.66667 16.6111C7.66667 14.49 9.37889 12.7778 11.5 12.7778C13.6211 12.7778 15.3333 14.49 15.3333 16.6111C15.3333 18.7322 13.6211 20.4444 11.5 20.4444ZM15.3333 7.66667H2.55556V2.55556H15.3333V7.66667Z" fill="white" />
                            </svg>
                            Save
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalData;