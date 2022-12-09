import Progress from "../components/dashboard/Progress";
import Shareable from "../components/dashboard/Shareable";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";
import {UserService} from "../services/UserService.js";
import {useEffect, useState} from "react";

const Dashboard = () => {
    const [user,setUser] = useState(null)
    const [percent,setPercent] = useState(null)
    const [count,setCount] = useState(null)
    const userService = new UserService()

    const loadDataUser = () => {
      userService.getUserInfo(localStorage.id)
          .then((res)=>res.json())
          .then((data)=>{setUser(data)})
          .catch(()=>{})
    }

    const loadCount = () => {
        userService.getCountVerbs(localStorage.id)
            .then((res)=>res.json())
            .then((data)=>{setCount(data.data)})
            .catch(()=>{})
    }

    const loadPercent = () => {
        userService.getPercentUser(localStorage.id)
            .then((res)=>res.json())
            .then((data)=>{setPercent(data.data)})
            .catch(()=>{})
    }

    useEffect(()=>{
        loadDataUser()
        loadPercent()
        loadCount()
    },[])

    return (
        <Drawer>
            <Header />
            <div className="p-5">
                {
                    user!=null && percent!=null && count!=null && (
                        <>
                            <WelcomeHeader userName={user.userName} />
                            <Progress G1={percent[0]} G2={percent[1]} G3={percent[2]} count={count} />
                            <Shareable />
                        </>
                    )
                }
            </div>
        </Drawer>
    )
}

export default Dashboard;