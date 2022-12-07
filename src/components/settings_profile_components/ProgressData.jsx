import ProgressCourses from "./ProgressCourses";
import StudentsBadges from "./StudentsBadges";

const ProgressData = ({user}) => {
    return (
        <>
            <div className="flex basis-3/5 flex-col bg-[#ffff] px-20 shadow-md m-3 rounded-lg">
                <ProgressCourses user={user}/>
                <StudentsBadges user={user}/>
            </div>
        </>
    )
}

export default ProgressData;