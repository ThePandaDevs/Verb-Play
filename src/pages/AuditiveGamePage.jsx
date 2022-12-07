import AuditiveGameBody from "../components/auditiveGame/AuditiveGameBody";
import AuditiveGameHeader from "../components/auditiveGame/AuditiveGameHeader";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";
import {Howl} from 'howler';
import GameAuditive from '../assets/audio/05 Choose a File.mp3'
import {useEffect, useState} from "react";
import {UserService} from "../services/UserService.js";
import {sample} from "lodash";
import {Report} from "notiflix/build/notiflix-report-aio";
import GameCorrect from '../assets/audio/18 A Good Buddy.mp3'
import GameFailed from '../assets/audio/40 Ambush!.mp3'


const AuditiveGamePage = () => {
    const [verbs,setVerbs] = useState(null)
    const [verb,setVerb] = useState("")
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
                for (let i = 0; i < 3; i++) {
                    let random = sample(data.verbs)
                    if (list.find(v=> v==random)){
                        list.push(sample(data.verbs))
                    }
                    list.push(random)
                }
                setVerbs(list)
            })
            .catch(()=>{

            })
    }
// window.speechSynthesis.speak(msg)
    useEffect(()=>{
        if (verb!=""){
            Report.info('Are You Ready? 😎👌','Listen Carefully The Next Audio 🔊',
                'Okay',
                ()=>{
                msg.text = verb
                    window.speechSynthesis.speak(msg)
                }
            )
        }
    },[verb])

    useEffect(()=>{
        if (verbs!=null){
            setTimeout(()=>{
                let rnd = Math.floor(Math.random() * 4);
                setVerb(verbs[rnd].name)
            },2000)
        }
    },[verbs])

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