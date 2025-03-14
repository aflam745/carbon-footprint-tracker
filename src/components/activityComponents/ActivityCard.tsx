import "./ActivityCard.css";
import { ActivityData } from "./activity-data";

  const ActivityCard = ({ title, date, category, rank }: ActivityData) => {
    return (
      <div className="activity-card-container">
        <div className="activity-info">
          <h1 className="activity-title">{title}</h1>
          <p className="activity-details">Date: {date}</p>
          <p className="activity-details">Category: {category}</p>
        </div>
        <p className="activity-carbon-rank">Carbon value: {rank}</p>
      </div>
    );
  };

  export default ActivityCard;
