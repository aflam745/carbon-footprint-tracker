import "./Profile.css"
import ProgressDisplay from "./profileComponents/ProgressDisplay";
import TipsDisplay from "./profileComponents/TipsDisplay";

const Profile = () => {
    return (
        <div className="profile-container">
            <ProgressDisplay />
            <TipsDisplay />
        </div>
    )
}

export default Profile;
