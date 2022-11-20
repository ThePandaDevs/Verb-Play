export const LeftContentRegister = () => {
  return(
      <div className="p-6">
          <h1 className="text-3xl font-bold">INICIAR SESIÓN</h1>
          <p className="font-light">Retoma tus actividades de aprendizaje divirtiéndote</p>
          <div className="flex justify-center mt-6">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Nombre(s)</span>
                  </label>
                  <input type="text" placeholder="Ingrese su nombre" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-2">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Apellidos</span>
                  </label>
                  <input type="text" placeholder="Ingrese sus apellidos" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-2">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Nombre de Usuario</span>
                  </label>
                  <input type="text" placeholder="Ingrese su nombre de usuario" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-2">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Correo Electrónico</span>
                  </label>
                  <input type="text" placeholder="Ingrese su correo electrónico" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-2">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Contraseña</span>
                  </label>
                  <input type="text" placeholder="********" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-6">
              <button className="btn btn-ghost bg-[#00A67E] hover:bg-[#00A67E] text-white border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">Registrarse</button>
          </div>
          <div className="flex justify-center mt-3">
              <p className="font-light">¿Ya tienes una cuenta?</p>
              <a href="/login" className="font-bold flex justify-center underline text-[#007A5D] ml-4">Iniciar Sesión</a>
          </div>
      </div>
  )
}