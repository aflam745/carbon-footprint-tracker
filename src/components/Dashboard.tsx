import CarbonData from "./chartComponents/CarbonData";
import CategoryData from "./chartComponents/CategoryData";
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <CategoryData />
            <CarbonData />
        </div>
    )
}

export default Dashboard;
