import CardInfo from '../components/badges_components/CardInfo'
import FirstLevelBadges from '../components/badges_components/FirstLevelBadges';
import HighLevelBadges from '../components/badges_components/HighLevelBadges';
import MediumLevelBadges from '../components/badges_components/MediumLevelBadges';

const BadgesPage = () => {

    return(
        <div >
            <p class="text-2xl text-[#00A67E] font-bold py-3" >YakuzaEnjoyer’s badges</p>
            <CardInfo />
            <HighLevelBadges />
            <MediumLevelBadges />
            <FirstLevelBadges />
        </div>
    )
}

export default BadgesPage;