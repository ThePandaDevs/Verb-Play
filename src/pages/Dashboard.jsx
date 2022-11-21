import Progress from "../components/dashboard/Progress";
import Shareable from "../components/dashboard/Shareable";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";

const Dashboard = () => {
    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <WelcomeHeader />
                <Progress />
                <Shareable />
            </div>
        </Drawer>
    )
}

export default Dashboard;