import "./TipsDisplay.css"
import lightbulbIcon from "../../assets/lightbulb.png"
import { useState } from "react";
import { TIPS_DATA } from "./tips-data";
import { TipData } from "./tips-data";

const TipsDisplay = () => {
    const [tipNum, setTipNum] = useState(0);

    function randomTip(tips: TipData[]){
        return Math.floor(Math.random() * tips.length);
    }


    function changeTip() {
        setTipNum(() => randomTip(TIPS_DATA))
    }

    return (
        <div className="tips-display-container">
            <div className="tips-header-container">
                <h1 className="tips-header">Sustainability Tips</h1>
                <img
                    src={lightbulbIcon}
                    className="lightbulb-icon"
                />
            </div>
            <button onClick={changeTip} className="tips-button">Generate New</button>
            <p>{TIPS_DATA[tipNum].message}</p>
        </div>
    )
}

export default TipsDisplay;
