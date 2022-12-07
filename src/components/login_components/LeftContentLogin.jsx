import {useState} from "react";
import {popUpNotification} from "../../utilities/Notifications.js";
import {LoginService} from "../../services/LoginService.js";
import { useNavigate } from "react-router-dom";
export const LeftContentLogin = () => {
    const [user,setUser] = useState({userName:'',password:''})
    const navigate = useNavigate();
    const loginService = new LoginService()

    const handleChange = (item,e) => {
        let copiedUser = {...user}
        copiedUser[item] = e.target.value
        setUser(user => ({...copiedUser}))
    }

    const loginApp = () => {
        loginService.loginUser(user)
            .then((res)=>res.json())
            .then((data)=>{
                if (data.info!="404"){
                    localStorage.id = data.id
                    popUpNotification('success','Success','Successful login',false,false,true)
                    navigate('/dashboard')
                }else{
                    popUpNotification('warning','Attention','Check your data',true,false,true)
                }
            })
            .catch(()=>{
                popUpNotification('error','Error','Error in Server App',true,false,true)
            })
    }

    return (
        <div className="p-3 pt-1/2">
            <h1 className="text-3xl font-bold text-center">INICIAR SESIÓN</h1>
            <p className="font-light text-center">Retoma tus actividades de aprendizaje divirtiéndote</p>
            <div className="flex justify-center mt-6">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Nombre de Usuario</span>
                    </label>
                    <input type="text" value={user.userName} onChange={(e)=>handleChange("userName",e)} placeholder="Usuario" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Contraseña</span>
                    </label>
                    <input type="password" value={user.password} onChange={(e)=>handleChange("password",e)} placeholder="*********" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button onClick={loginApp} className="btn btn-ghost bg-[#00A67E] hover:bg-[#00A67E] text-white border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0  w-full max-w-xs">Iniciar Sesión</button>
            </div>
            <a className="font-bold mt-3 flex justify-center underline text-[#007A5D]">¿Olvidaste tu contraseña?</a>
            <div className="flex justify-center mt-3">
                <p className="font-light">¿No tienes cuenta?</p>
                <a href="/register" className="font-bold flex justify-center underline text-[#007A5D] ml-4">Registrate</a>
            </div>
        </div>
    )
}