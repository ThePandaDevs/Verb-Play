import KinesthesicGameBody from "../components/kinesthesicGame/KinesthesicGameBody";
import KinesthesicGameHeader from "../components/kinesthesicGame/KinesthesicGameHeader";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";
import {UserService} from "../services/UserService.js";
import {sample} from "lodash";
import {Notify} from "notiflix";
import {useEffect, useState} from "react";
import {Howl} from 'howler';
import GameAuditive from '../assets/audio/Something.mp3'
import GameCorrect from '../assets/audio/18 A Good Buddy.mp3'
import GameFailed from '../assets/audio/40 Ambush!.mp3'


const KinesthesicGamePage = () => {

    const userService = new UserService()
    const [present,setPresent] = useState("")
    const [past,setPast] = useState("")
    const [pastParticiple,setPastParticiple] = useState("")
    const [verb,setVerb] = useState(null)

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

    const loadInfoUser = () => {
        userService.getUserInfo(localStorage.id)
            .then((res)=>res.json())
            .then((data)=>{
                let random = sample(data.verbs)
                setVerb(random)
            })
            .catch(()=>{
                Notify.failure('An Error Occurred On The Server')
            })
    }

    useEffect(()=>{
        sound.play()
        loadInfoUser()
    },[])

    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <KinesthesicGameHeader />
                <KinesthesicGameBody
                    verb={verb} present={present} past={past}
                    pastParticiple={pastParticiple} setPresent={setPresent}
                    setPast={setPast} setPastParticiple={setPastParticiple}
                    winSound={winSound} failureSound={failureSound}
                />
            </div>
        </Drawer>
    )
}

export default KinesthesicGamePage;