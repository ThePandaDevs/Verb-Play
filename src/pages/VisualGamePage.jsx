import VisualGameHeader from "../components/visualGame/VisualGameHeader";
import VisualGameBody from "../components/visualGame/VisualGameBody";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";
const VisualGamePage = () => {
    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <VisualGameHeader />
                <VisualGameBody />
            </div>
        </Drawer>
    )
}

export default VisualGamePage;