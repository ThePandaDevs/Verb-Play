import EnglishIMG from "../../assets/eng-esp.svg";
import SpanishIMG from "../../assets/esp-eng.svg";
export const LanguageType = () => {
    return(
        <div className="p-4">
            <h1 className="flex justify-center text-3xl font-bold mb-4">Game Mode</h1>
            <p className="flex justify-center font-light">
                Please, select how you want to learn according to your lang
            </p>

            <div className="shadow p-6 rounded-lg mt-4">
                <div className="grid grid-flow-col auto-cols-auto">
                    <div className="grid items-center">
                        <h1 className="font-bold">English to Spanish</h1>
                        <p className="font-light text-sm">
                            Learn verbs through the concept in English and identifying it in Spanish for example (Bring -> Traer)</p>
                    </div>
                    <div className="grid items-center justify-end ml-6">
                        <img src={EnglishIMG} className="w-16"/>
                    </div>
                </div>
            </div>

            <div className="shadow p-6 rounded-lg mt-4">
                <div className="grid grid-flow-col auto-cols-auto">
                    <div className="grid items-center">
                        <h1 className="font-bold">Spanish to English</h1>
                        <p className="font-light text-sm">Learn verbs through the concept in Spanish and identifying it in English for example (Perseguir -> Chase)</p>
                    </div>
                    <div className="grid items-center justify-end ml-6">
                        <img src={SpanishIMG} className="w-16"/>
                    </div>
                </div>
            </div>

        </div>
    )
}