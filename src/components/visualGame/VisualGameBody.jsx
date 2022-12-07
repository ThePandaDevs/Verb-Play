import { motion } from "framer-motion"
import {UserService} from "../../services/UserService.js";
import {useEffect, useState} from "react";
import {popUpNotification} from "../../utilities/Notifications.js";
import { Report } from 'notiflix/build/notiflix-report-aio';
import {shuffle} from "lodash";
import {Howl} from 'howler';
import GameAuditive from '../../assets/audio/33 Friendly Neighbors.mp3'
import GameCorrect from '../../assets/audio/18 A Good Buddy.mp3'



const VisualGameBody = () => {
    const [hit,setHit] = useState(0)
    const [flag,setFlag] = useState(false)
    const [flip,setFlip] = useState(false)
    const [verbs,setVerbs] = useState([])
    const [first,setFirst] = useState(false)
    const [posOne,setPosOne] = useState(0)
    const [firstVerb,setFirstVerb] = useState("")
    const [selectVerbs,setSelectVerbs] = useState([])
    const [selectCards,setSelectCards] = useState([true,true,true,true,true,true,true,true])
    const userService = new UserService()

    const sound = new Howl({
        src: [GameAuditive],
        loop: true,
        volume: 0.3,
    });

    const correct = new Howl({
        src: [GameCorrect],
        volume: 0.5,
    });


    const loadUserVerbs = () => {
        userService.getUserInfo(localStorage.id)
            .then((res)=>res.json())
            .then((data)=>{
                let v = shuffle(data.verbs)
                setVerbs(v)
                setFlag(true)
            })
            .catch(()=>{
                popUpNotification('error','Error','Error in Server App',true,false,true)
            })
    }

    const clickCards = (position,verb) =>{
        if (first==false){
            setFirstVerb(verb)
            setFirst(true)
            setPosOne(position)
            let newArray = [...selectCards]
            newArray[position] = true
            setSelectCards(newArray)
        }else{
            if (selectVerbs.find(v => v.spanish == firstVerb && v.english == verb || v.spanish == verb && v.english == firstVerb )){
                setHit(hit+1)
                let newArray = [...selectCards]
                newArray[posOne] = true
                newArray[position] = true
                setFirst(false)
                setSelectCards(newArray)
                console.log(hit)
                if (hit===3){
                    correct.play()
                    Report.success(
                        'OMG, YOU WIN!!! 🎉🎉',
                        'You are a genius 🤯',
                        'Okay',
                        ()=>{
                            location.reload(false)
                        }
                    );
                }
            }else{
                let newArray = [...selectCards]
                newArray[posOne] = false
                newArray[position] = false
                setFirst(false)
                setSelectCards(newArray)
            }
        }
    }


    useEffect(()=>{
        if (flip==true){
            Report.info(
                'Ready?',
                'You have five seconds to memorize 🤓🧠',
                'Okay',
            );
            setTimeout(()=>{
                let newArray = [...selectCards]
                for (let i = 0; i < selectCards.length; i++) {
                    newArray[i] = false
                }
                setSelectCards(newArray)
            },5000)
        }
    },[flip])


    useEffect(()=>{
        if (flag==true){
            verbs.map((obj,index)=>{
                if (index<4){
                    setSelectVerbs((prevState) => [...prevState,{english:obj.english[0], spanish:obj.spanish[0]}])
                }
            })
            setFlip(true)
        }
    },[verbs])

    useEffect(()=>{
        loadUserVerbs()
        sound.play()
    },[])

    return (
        <>
            <div className="w-full pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center w-full">
                    {selectVerbs.length>0 ?
                        <>
                            <motion.div onClick={()=>{clickCards(0,selectVerbs[0].english)}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-64 h-48 grid justify-center m-4 drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 card w-96 bg-white border-none text-neutral-content hover:bg-white normal-case">
                                <h2 className="card-title text-black text-2xl">{selectCards[0] == true ? selectVerbs[0].english:"🎴"}</h2>
                            </motion.div>
                            <motion.div onClick={()=>{clickCards(1,selectVerbs[3].spanish)}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-64 h-48 grid justify-center m-4 drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 card w-96 bg-white border-none text-neutral-content hover:bg-white normal-case">
                                <h2 className="card-title text-black text-2xl">{selectCards[1] == true ? selectVerbs[3].spanish:"🎴"}</h2>
                            </motion.div>
                            <motion.div onClick={()=>{clickCards(2,selectVerbs[1].english)}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-64 h-48 grid justify-center m-4 drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 card w-96 bg-white border-none text-neutral-content hover:bg-white normal-case">
                                <h2 className="card-title text-black text-2xl">{selectCards[2] == true ? selectVerbs[1].english:"🎴"}</h2>
                            </motion.div>
                            <motion.div onClick={()=>{clickCards(3,selectVerbs[2].spanish)}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-64 h-48 grid justify-center m-4 drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 card w-96 bg-white border-none text-neutral-content hover:bg-white normal-case">
                                <h2 className="card-title text-black text-2xl">{selectCards[3] == true ? selectVerbs[2].spanish:"🎴"}</h2>
                            </motion.div>
                            <motion.div onClick={()=>{clickCards(4,selectVerbs[1].spanish)}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-64 h-48 grid justify-center m-4 drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 card w-96 bg-white border-none text-neutral-content hover:bg-white normal-case">
                                <h2 className="card-title text-black text-2xl">{selectCards[4] == true ? selectVerbs[1].spanish:"🎴"}</h2>
                            </motion.div>
                            <motion.div onClick={()=>{clickCards(5,selectVerbs[2].english)}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-64 h-48 grid justify-center m-4 drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 card w-96 bg-white border-none text-neutral-content hover:bg-white normal-case">
                                <h2 className="card-title text-black text-2xl">{selectCards[5] == true ? selectVerbs[2].english:"🎴"}</h2>
                            </motion.div>
                            <motion.div onClick={()=>{clickCards(6,selectVerbs[3].english)}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-64 h-48 grid justify-center m-4 drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 card w-96 bg-white border-none text-neutral-content hover:bg-white normal-case">
                                <h2 className="card-title text-black text-2xl">{selectCards[6] == true ? selectVerbs[3].english:"🎴"}</h2>
                            </motion.div>
                            <motion.div onClick={()=>{clickCards(7,selectVerbs[0].spanish)}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-64 h-48 grid justify-center m-4 drop-shadow-[0_5px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none -translate-y-0 card w-96 bg-white border-none text-neutral-content hover:bg-white normal-case">
                                <h2 className="card-title text-black text-2xl">{selectCards[7] == true ? selectVerbs[0].spanish:"🎴"}</h2>
                            </motion.div>
                        </>:
                        <></>
                    }
                </div>
            </div>
        </>
    )
}

export default VisualGameBody;