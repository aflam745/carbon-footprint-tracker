import "./ProgressDisplay.css"
import rocketImage from "../../assets/rocket.png"
import { useContext } from "react"
import { ActivityContext } from "../activityComponents/ActivityContext"
import { AchievementContext } from "../achievementsComponents/AchievementContext"
import { AchievementData } from "../achievementsComponents/achievement-data"

const ProgressDisplay = () => {
    const activityContext = useContext(ActivityContext);
    const achievementContext = useContext(AchievementContext);

    if (!activityContext || !achievementContext) {
        throw new Error("ProgressDisplay must be used within an ActivityProvider");
    }

    const { activities, uniqueDayCount } = activityContext;
    const { achievements, totalPoints } = achievementContext;

    const completedAchCount = achievements.filter((achievement: AchievementData) => achievement.completed).length

    return (
        <div className="progress-display-container">
            <div className="header-container">
                <h1 className="progress-header">Progress</h1>
                <img
                    src={rocketImage}
                    className="rocket-icon"
                />
            </div>
            <p>Activities logged: {activities.length}</p>
            <p>Days logged: {uniqueDayCount}</p>
            <p>Achievements completed: {completedAchCount}</p>
            <p>Points earned: {totalPoints}</p>
        </div>
    )
}

export default ProgressDisplay
