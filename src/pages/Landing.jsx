import {FirstContent} from "../components/lading_components/FirstContent";
import {CenterFirstContent} from "../components/lading_components/CenterFirstContent";
import {CenterLastContent} from "../components/lading_components/CenterLastContent";
import {LastContent} from "../components/lading_components/LastContent";
import NavBarLanding from "../components/lading_components/NavBarLanding";

const Landing = () => {
  return(
      <div className="min-h-screen">
          <NavBarLanding/>
          <FirstContent/>
          <CenterFirstContent/>
          <CenterLastContent/>
          <LastContent/>
      </div>
  )
}

export default Landing;
