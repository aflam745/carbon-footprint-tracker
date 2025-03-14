import "./Logs.css";
import ActivityLog from "./activityComponents/ActivityLog";
import Achievements from "./achievementsComponents/Achievements";

const Logs = () => {
    return (
        <div className="logs-container">
            <ActivityLog />
            <Achievements />
        </div>
    )
}

export default Logs;
