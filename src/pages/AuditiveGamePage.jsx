import AuditiveGameBody from "../components/auditiveGame/AuditiveGameBody";
import AuditiveGameHeader from "../components/auditiveGame/AuditiveGameHeader";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";
import {Howl} from 'howler';
import GameAuditive from '../assets/audio/05 Choose a File.mp3'
import {useEffect, useState} from "react";
import {UserService} from "../services/UserService.js";
import {random, sample, shuffle} from "lodash";
import {Report} from "notiflix/build/notiflix-report-aio";
import GameCorrect from '../assets/audio/18 A Good Buddy.mp3'
import GameFailed from '../assets/audio/40 Ambush!.mp3'


const AuditiveGamePage = () => {
    const [verbs,setVerbs] = useState(null)
    const [verb,setVerb] = useState("")
    const [flag,setFlag] = useState(false)
    const userService = new UserService()
    // Text to Speech
    const msg = new SpeechSynthesisUtterance()
    msg.lang = 'en-US';
    // Audio Game
    const sound = new Howl({
        src: [GameAuditive],
        loop: true,
        volume: 0.3,
    });

    const winSound = new Howl({
        src: [GameCorrect],
        volume: 0.5,
    })

    const failureSound = new Howl({
        src: [GameFailed],
        volume: 0.5,
    })

    const getInfoUser = () => {
        userService.getUserInfo(localStorage.id)
            .then((res)=>res.json())
            .then((data)=>{
                let list = []
                let suffleList = shuffle(data.verbs)
                list.push(suffleList[0])
                list.push(suffleList[1])
                list.push(suffleList[2])
                setVerbs(list)
                setVerb(list[random(0,3)].name)
                setFlag(true)
            })
            .catch(()=>{})
    }
// window.speechSynthesis.speak(msg)
    useEffect(()=>{
        if (flag==true){
            Report.info('Are You Ready? 😎👌','Listen Carefully The Next Audio 🔊',
                'Okay',
                ()=>{
                    msg.text = verb
                    window.speechSynthesis.speak(msg)
                }
            )
        }
    },[flag])


    useEffect(() => {
        getInfoUser()
        sound.play()
    }, [])

    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <AuditiveGameHeader verb={verb} msg={msg}/>
                <AuditiveGameBody verbs={verbs} verb={verb} win={winSound} fail={failureSound}/>
            </div>
        </Drawer>
    )
}

export default AuditiveGamePage;