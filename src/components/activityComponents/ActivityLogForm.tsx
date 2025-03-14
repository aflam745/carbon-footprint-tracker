import "./ActivityLogForm.css";
import { useContext } from "react";
import { ActivityContext } from "./ActivityContext";
import { useNavigate } from "react-router-dom";

const ActivityLogForm = () => {
  const activityContext = useContext(ActivityContext);

  if (!activityContext) {
    throw new Error("ActivityLogForm must be used within an ActivityProvider");
  }

  const { addActivity } = activityContext;
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newActivity = {
      title: formData.get("title") as string,
      date: formData.get("date") as string,
      category: formData.get("category") as string,
      rank: Number(formData.get("rank")),
    };

    addActivity(newActivity);
    navigate("/"); // Redirect back to the Dashboard
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Activity Name:</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="date">Date:</label>
      <input type="date" id="date" name="date" required />

      <label htmlFor="category">Category:</label>
      <select id="category" name="category" required>
        <option value="">--Select a category--</option>
        <option value="Consumption">Consumption</option>
        <option value="Transportation">Transportation</option>
        <option value="Food">Food</option>
      </select>

      <label htmlFor="rank">Carbon Rank:</label>
      <input type="number" id="rank" name="rank" required />

      <button type="submit">Add Activity</button>
    </form>
  );
};

export default ActivityLogForm;
