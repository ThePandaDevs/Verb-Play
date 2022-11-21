
import HeaderVerbList from "../components/verb_list/HeaderVerbList";
import VerbListTable from "../components/verb_list/VerbListTable";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";

const VerbList = () => {
    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <HeaderVerbList />
                <VerbListTable />
            </div>
        </Drawer>
    )
}

export default VerbList;