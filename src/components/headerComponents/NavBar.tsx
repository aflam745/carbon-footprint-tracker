import "./NavBar.css";
import profileIcon from "../../assets/profile_icon.png"
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const openLogsPage = () => {
        navigate("/");
    };

    const openDashboardPage = () => {
        navigate("/dashboard");
    }

    const openProfilePage = () => {
        navigate("/profile")
    }

    return (
        <div className="navbar-container">
            <button className="link-button" onClick={openLogsPage}>
                Logs and Achievements
            </button>
            <button className="link-button" onClick={openDashboardPage}>
                Dashboard
            </button>
            <img
                src={profileIcon}
                className="profile-icon"
                onClick={openProfilePage}
            />
        </div>
    )
}

export default NavBar;
