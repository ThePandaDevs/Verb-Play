import {UserService} from "../../services/UserService.js";
import {useEffect, useState} from "react";
import {popUpNotification} from "../../utilities/Notifications.js";

const MyVerbListTable = () => {
    const [verbs,setVerbs] = useState([])
    const userService = new UserService()

    const loadUserInfo = () => {
        userService.getUserInfo(localStorage.id)
            .then((res)=>res.json())
            .then((data)=>{
                if (data.info != "404"){
                    setVerbs(data.verbs)
                }
            })
            .catch(()=>{
                popUpNotification('error','Error','Error in Server App',true,false,true)
            })
    }

    useEffect(()=>{
        loadUserInfo()
    },[])

    return (
        <>
            <div className="overflow-x-auto w-full py-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-center">Verb (infinitive)</th>
                            <th className="text-center">Past simple</th>
                            <th className="text-center">Past participle</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        verbs.map((verb,index)=>{
                            return(
                                <tr className="text-center rounded-[25px] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)]">
                                    <td>
                                        <div className="font-semibold">
                                            {
                                                verb.level == 1 ?
                                                    <span className="indicator-item badge bg-[#00A67E] border-none mr-2 transform translate-y-1"></span>:
                                                    verb.level == 2 ?
                                                        <span className="indicator-item badge bg-[#FABE2C] border-none mr-2 transform translate-y-1"></span> :
                                                        verb.level == 3 ?
                                                            <span className="indicator-item badge bg-[#6C63FF] border-none mr-2 transform translate-y-1"></span>: <></>
                                            }
                                            {verb.english[0]}
                                        </div>
                                    </td>
                                    <th className="font-semibold text-center">{verb.english[1]}</th>
                                    <th className="font-semibold text-center">{verb.english[2]}</th>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MyVerbListTable;