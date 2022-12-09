import CardInfo from '../components/badges_components/CardInfo'
import FirstLevelBadges from '../components/badges_components/FirstLevelBadges';
import HighLevelBadges from '../components/badges_components/HighLevelBadges';
import MediumLevelBadges from '../components/badges_components/MediumLevelBadges';
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";
import {useEffect, useState} from "react";
import {UserService} from "../services/UserService.js";
import {Notify} from "notiflix";

const BadgesPage = () => {
    const [user,setUser] = useState({})
    const userService = new UserService()
    const userInfo = () => {
        userService.getUserInfo(localStorage.id)
            .then((res)=>res.json())
            .then((data)=>{setUser(data)})
            .catch(()=>{Notify.failure('Error in Server App')})
    }

    useEffect(()=>{
       userInfo()
    },[])

    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <p class="text-4xl text-center text-[#00A67E] font-bold py-5" >{user.userName}’s badges</p>
                <CardInfo />
                <HighLevelBadges />
                <MediumLevelBadges />
                <FirstLevelBadges />
            </div>
        </Drawer>
    )
}

export default BadgesPage;