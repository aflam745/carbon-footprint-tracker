import "./Achievements.css"
import AchievementCard from "./AchievementCard"
import trophyIcon from "../../assets/trophy.png"
import { useContext } from "react";
import { AchievementContext } from "./AchievementContext";

const Achievements = () => {
    const achievementContext = useContext(AchievementContext);

    if (!achievementContext) {
        return <div>Error: Achievement context not available.</div>;
    }

    const { achievements, totalPoints } = achievementContext;

    return (
        <div className="achievement-container">
            <div className="achievement-header-container">
                <h1 className="achievement-header">Achievements</h1>
                <img
                    src={trophyIcon}
                    className="trophy-icon"
                />
                <p className="points-amount">Points: {totalPoints}</p>
            </div>
            <div className="achievement-cards">
                {achievements.map((data, index) => (
                    <AchievementCard key={index} {...data} />
                ))}
            </div>
        </div>
    )
}

export default Achievements
