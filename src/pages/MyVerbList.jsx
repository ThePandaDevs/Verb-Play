import MyHeaderVerbList from "../components/my_verb_list/MyHeaderVerbList";
import MyVerbListTable from "../components/my_verb_list/MyVerbListTable";
import Drawer from "../components/utilities/Drawer";
import Header from "../components/utilities/Header";

const MyVerbList = () => {
    return (
        <Drawer>
            <Header />
            <div className="p-5">
                <MyHeaderVerbList />
                <MyVerbListTable />
            </div>
        </Drawer>

    )
}

export default MyVerbList;