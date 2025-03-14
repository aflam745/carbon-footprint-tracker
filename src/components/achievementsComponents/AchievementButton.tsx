import "./AchievementButton.css"
import { useState, useEffect, useContext } from "react"
import { AchievementData } from "./achievement-data"
import { AchievementContext } from "./AchievementContext"

const AchievementButton = ({
    title,
    progress,
    goal,
    points,
    completed,
    collected : initialCollected
}: AchievementData) => {
    const [collected, setCollected] = useState(initialCollected);
    const achievementContext = useContext(AchievementContext);

    useEffect(() => {
        setCollected(initialCollected);
    }, [initialCollected]);

    const onSelect = () => {
        if (completed && !collected) {
            achievementContext?.collectAchievementPoints(title);
            setCollected(true);
            alert("Great Job, your points have been collected!")
        } else if (completed && collected) {
            alert("You have already completed this challenge!")
        } else {
            alert("You must first complete the challenge.");
        }
    }

    let buttonMessage;
    if(!completed && !collected) {
        buttonMessage = progress + "/" + goal;
    } else if(completed && !collected) {
        buttonMessage = "+" + points;
    } else {
        buttonMessage = "Completed!"
    }

    return (
        <button onClick={() => onSelect()} className="achievement-button">
            {buttonMessage}
        </button>
    )
}

export default AchievementButton;
