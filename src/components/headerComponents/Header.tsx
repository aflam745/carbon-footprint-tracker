import "./Header.css"
import NavBar from "./NavBar";
import headerImage from "../../assets/leaf.png"

const Header = () => {
    return (
        <header>
            <div className="header-title-container">
                <h1>Carbon Footprint Tracker</h1>
                <img
                    src={headerImage}
                    className="leaf-icon"
                    alt="Leaf Icon"
                />
            </div>
            <NavBar/>
        </header>
    )
}

export default Header;
