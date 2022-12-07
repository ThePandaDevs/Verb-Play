import Mark from "../../../src/assets/mark.svg"
import {useEffect, useState} from "react";
import {VerbService} from "../../services/VerbService.js";
import {popUpNotification} from "../../utilities/Notifications.js";
import {UserService} from "../../services/UserService.js";
const VerbListTable = () => {

    const [verbs,setVerbs] = useState([])
    const verbService = new VerbService()
    const userService = new UserService()

    const loadVerbs = () => {
        verbService.getAllVerbs()
            .then((res)=>res.json())
            .then((data)=>{
                setVerbs(data)
            })
            .catch(()=>{
                popUpNotification('error','Error','Error in Server App',true,false,true)
            })
    }

    const updateVerbs = (verb) => {
        let info = {id:localStorage.id,verb:verb}
        userService.updateVerbsUser(info)
            .then((res)=>res.json())
            .then((data)=>{
                if (data.info == "Exist"){
                    popUpNotification('success','Info','The verb already exist in your list!',true,false,true)
                }else{
                    popUpNotification('success','Success','Verb added correctly',true,false,true)
                }
            })
            .catch(()=>{
                popUpNotification('error','Error','Error in Server App',true,false,true)
            })
    }

    useEffect(()=>{
        loadVerbs()
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
                            <th className="text-center">Action</th>
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
                                    <th className="font-semibold text-center">
                                        <div className="tooltip" data-tip="Add to my verbs">
                                            <button onClick={()=>updateVerbs(verb)} className="btn mx-3 w-full bg-[#00A67E] border-none hover:bg-[#F9F9F9] border-none drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0">
                                                <img src={Mark} className="w-5 h-10" />
                                            </button>
                                        </div>
                                    </th>
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

export default VerbListTable;