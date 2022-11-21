import AuditiveGameBody from "../components/auditiveGame/AuditiveGameBody";
import AuditiveGameHeader from "../components/auditiveGame/AuditiveGameHeader";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";

const AuditiveGamePage = () => {
    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <AuditiveGameHeader />
                <AuditiveGameBody />
            </div>
        </Drawer>
    )
}

export default AuditiveGamePage;