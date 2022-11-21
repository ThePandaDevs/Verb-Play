import PersonalData from "../components/settings_profile_components/PersonalData";
import ProgressData from "../components/settings_profile_components/ProgressData";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";

const SettingsProfilePage = () => {
    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <h2 className="card-title text-[#00A67E] font-bold text-3xl py-5">Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <PersonalData />
                    <ProgressData />
                </div>
            </div>
        </Drawer>
    )
}

export default SettingsProfilePage;