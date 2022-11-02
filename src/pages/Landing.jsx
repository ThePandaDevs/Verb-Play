import {FirstContent} from "../components/lading_components/FirstContent";
import {CenterFirstContent} from "../components/lading_components/CenterFirstContent";
import {CenterLastContent} from "../components/lading_components/CenterLastContent";
import {LastContent} from "../components/lading_components/LastContent";

export const Landing = () => {
  return(
      <div className="h-screen">
          <FirstContent/>
          <CenterFirstContent/>
          <CenterLastContent/>
          <LastContent/>
      </div>
  )
}