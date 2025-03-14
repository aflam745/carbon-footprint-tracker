import AchievementButton from "./AchievementButton"
import "./AchievementCard.css"
import { AchievementData } from "./achievement-data"

const AchievementCard = ({
    title,
    progress,
    goal,
    points,
    completed,
    collected,
    type
}: AchievementData) => {
    return (
        <div className="achievement-card-container">
            <h1 className="achievement-title">{title}</h1>
            <p className="achievement-points">{points} points</p>
            <AchievementButton {...{ title, progress, goal, points, completed, collected, type }} />
        </div>
    )
}

export default AchievementCard
