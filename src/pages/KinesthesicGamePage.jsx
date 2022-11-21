import KinesthesicGameBody from "../components/kinesthesicGame/KinesthesicGameBody";
import KinesthesicGameHeader from "../components/kinesthesicGame/KinesthesicGameHeader";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";
const KinesthesicGamePage = () => {
    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <KinesthesicGameHeader />
                <KinesthesicGameBody />
            </div>
        </Drawer>
    )
}

export default KinesthesicGamePage;