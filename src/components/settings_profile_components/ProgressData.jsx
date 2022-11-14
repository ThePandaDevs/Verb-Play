import ProgressCourses from "./ProgressCourses";
import StudentsBadges from "./StudentsBadges";

const ProgressData = () => {
    return (
        <>
            <div className="flex basis-3/5 flex-col bg-[#ffff] px-20 rounded-r-lg">
                <ProgressCourses />
                <StudentsBadges />
            </div>
        </>
    )
}

export default ProgressData;