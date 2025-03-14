import "./ActivityLog.css";
import { useContext } from "react";
import { ActivityContext } from "./ActivityContext";
import paperIcon from "../../assets/paper.png"
import ActivityCard from "./ActivityCard";
import NewActivityButton from "./NewActivityButton";

const ActivityLog = () => {
  const activityContext = useContext(ActivityContext);

  if (!activityContext) {
    throw new Error("ActivityLog must be used within an ActivityProvider");
  }

  const { activities } = activityContext;

  return (
    <div className="activity-log-container">
      <div className="activity-log-header-container">
        <h1 className="activity-log-header">Activity Log</h1>
        <img
          src={paperIcon}
          className="paper-icon"
          />
        <NewActivityButton />
      </div>
      <div className="activity-log-cards">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
