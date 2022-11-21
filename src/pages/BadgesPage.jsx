import CardInfo from '../components/badges_components/CardInfo'
import FirstLevelBadges from '../components/badges_components/FirstLevelBadges';
import HighLevelBadges from '../components/badges_components/HighLevelBadges';
import MediumLevelBadges from '../components/badges_components/MediumLevelBadges';
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";

const BadgesPage = () => {

    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <p class="text-4xl text-center text-[#00A67E] font-bold py-5" >YakuzaEnjoyer’s badges</p>
                <CardInfo />
                <HighLevelBadges />
                <MediumLevelBadges />
                <FirstLevelBadges />
            </div>
        </Drawer>
    )
}

export default BadgesPage;