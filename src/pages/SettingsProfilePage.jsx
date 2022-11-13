import PersonalData from "../components/settings_profile_components/PersonalData";
import ProgressData from "../components/settings_profile_components/ProgressData";

const SettingsProfilePage = () => {
    return (
        <>
            <div className="text-2xl font-bold text-[#00A67E] breadcrumbs">
                <ul>
                    <li><a>Settings</a></li> 
                    <li><a>Profile preview</a></li> 
                </ul>
            </div>
            <div className="flex flex-col mt-2 md:flex-row">
                <PersonalData />
                <ProgressData />
            </div>
        </>
    )
}

export default SettingsProfilePage;