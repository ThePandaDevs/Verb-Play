import {useState} from "react";
import {LoginService} from "../../services/LoginService.js";
import {popUpNotification} from "../../utilities/Notifications.js";

export const LeftContentRegister = () => {
    const [user,setUser] = useState({name:'',lastName:'',userName:'',email:'',password:'',verbs:[]})
    const [flag,setFlag] = useState(false)
    const registerService = new LoginService()
    
    const handleChange = (item,e) => {
        let copiedUser = {...user}
        copiedUser[item] = e.target.value
        setUser(user => ({...copiedUser}))
    }

    const registerApp = () => {
        setFlag(true)
        registerService.registerUser(user)
            .then((res)=>res.json())
            .then(()=>{
                popUpNotification('success','Success','Successful Registration',true,true,true)
                setUser({name:'',lastName:'',userName:'',email:'',password:'',verbs: []})
                setTimeout(()=>{
                    setFlag(false)
                },2000)
            })
            .catch(()=>{

            })
    }
    
    return(
      <div className="p-6">
          <h1 className="text-3xl font-bold text-center">REGISTRATE!</h1>
          <p className="font-light text-center">haz tus actividades de aprendizaje divirtiéndote</p>
          <div className="flex justify-center mt-6">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Nombre(s)</span>
                  </label>
                  <input type="text" value={user.name} onChange={(e)=>handleChange("name",e)} placeholder="Ingrese su nombre" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-2">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Apellidos</span>
                  </label>
                  <input type="text" value={user.lastName} onChange={(e)=>handleChange("lastName",e)} placeholder="Ingrese sus apellidos" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-2">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Nombre de Usuario</span>
                  </label>
                  <input type="text" value={user.userName} onChange={(e)=>handleChange("userName",e)} placeholder="Ingrese su nombre de usuario" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-2">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Correo Electrónico</span>
                  </label>
                  <input type="text" value={user.email} onChange={(e)=>handleChange("email",e)} placeholder="Ingrese su correo electrónico" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-2">
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                      <span className="label-text">Contraseña</span>
                  </label>
                  <input type="password" value={user.password} onChange={(e)=>handleChange("password",e)} placeholder="********" className="input input-bordered w-full max-w-xs"/>
              </div>
          </div>
          <div className="flex justify-center mt-6">
              <button disabled={flag} onClick={registerApp} className="btn btn-ghost bg-[#00A67E] hover:bg-[#00A67E] text-white border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0  w-full max-w-xs">Registrarse</button>
          </div>
          <div className="flex justify-center mt-3">
              <p className="font-light">¿Ya tienes una cuenta?</p>
              <a href="/login" className="font-bold flex justify-center underline text-[#007A5D] ml-4">Iniciar Sesión</a>
          </div>
      </div>
  )
}