import { useNavigate } from "react-router-dom";
import "./NewActivityButton.css";

const NewActivityButton = () => {
  const navigate = useNavigate();

  const openFormPage = () => {
    navigate("/new");
  };

  return (
    <button className="new-activity-button" onClick={openFormPage}>
      New
    </button>
  );
};

export default NewActivityButton;
