import Progress from "../components/dashboard/Progress";
import Shareable from "../components/dashboard/Shareable";
import WelcomeHeader from "../components/dashboard/WelcomeHeader";

const Dashboard = () => {
    return (
        <>
            <WelcomeHeader />
            <Progress />
            <Shareable />
        </>
    )
}

export default Dashboard;