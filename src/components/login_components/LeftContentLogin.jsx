export const LeftContentLogin = () => {
  return(
      <div className="p-3">
          <h1 className="text-3xl font-bold">INICIAR SESIÓN</h1>
          <p className="font-light">Retoma tus actividades de aprendizaje divirtiéndote</p>
          <div className="flex justify-center mt-6">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Nombre de Usuario</span>
                  </label>
                  <input type="text" placeholder="Usuario" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-6">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Contraseña</span>
                  </label>
                  <input type="text" placeholder="*********" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-6">
              <button className="btn btn-ghost bg-[#00A67E] hover:bg-[#00A67E] text-white border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">Iniciar Sesión</button>
          </div>
          <a className="font-bold mt-3 flex justify-center underline text-[#007A5D]">¿Olvidaste tu contraseña?</a>
          <div className="flex justify-center mt-3">
              <p className="font-light">¿No tienes cuenta?</p>
              <a href="/register" className="font-bold flex justify-center underline text-[#007A5D] ml-4">Registrate</a>
          </div>
      </div>
  )
}