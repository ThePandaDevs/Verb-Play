import IMAGEONE from '../../assets/bg-2.8.svg'
import IMAGETWO from '../../assets/bg-time.svg'
import IMAGETHREE from '../../assets/bg-team.svg'

const StudentsBadges = ({user}) => {
    return (
        <div>
            <p className="text-xl font-bold mt-10 text-start">{user.userName} specials badges</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-3 justify-items-center">
                <div className="grid justify-items-center shadow-md p-3 w-32 m-2 rounded-md">
                    <img src={IMAGEONE} className="w-16" />
                    <h1 className="capitalize text-sm font-semibold mt-1 text-center">Complete Group 1</h1>
                </div>
                <div className="grid justify-items-center shadow-md p-3 w-32 m-2 rounded-md">
                    <img src={IMAGETWO} className="w-16" />
                    <h1 className="capitalize text-sm font-semibold mt-1 text-center">Play for 1 week</h1>
                </div>
                <div className="grid justify-items-center shadow-md p-3 w-32 m-2 rounded-md">
                    <img src={IMAGETHREE} className="w-16" />
                    <h1 className="capitalize text-sm font-semibold mt-1 text-center">Assist to special event</h1>
                </div>
            </div>
            <p className="grid justify-items-center text-xl font-normal text-[#00A67E] underline mt-10 text-start mb-2">See all tropies and medals</p>
        </div>
    )
}

export default StudentsBadges;