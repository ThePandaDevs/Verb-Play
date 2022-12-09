import PersonalData from "../components/settings_profile_components/PersonalData";
import ProgressData from "../components/settings_profile_components/ProgressData";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";
import {UserService} from "../services/UserService.js";
import {useEffect, useState} from "react";
import {Notify} from "notiflix";

const SettingsProfilePage = () => {
    const [user,setUser] = useState({})
    const userService = new UserService()

    const getUserInfo = () =>{
        userService.getUserInfo(localStorage.id)
            .then((res)=>res.json())
            .then((data)=>{
                Notify.info('Loading Info...')
                setUser(data)
            })
            .catch(()=>{
                Notify.failure('A Server Error Occurred')
            })
    }

    useEffect(()=>{
        getUserInfo()
    },[])

    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <h2 className="card-title text-[#00A67E] font-bold text-3xl py-5">Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <PersonalData user={user}/>
                    <ProgressData user={user} />
                </div>
            </div>
        </Drawer>
    )
}

export default SettingsProfilePage;