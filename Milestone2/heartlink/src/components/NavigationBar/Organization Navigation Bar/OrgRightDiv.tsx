import Profilecircle from "../Donor Navigation Bar/profileCircle";
import { IoNotificationsOutline } from "react-icons/io5";
function OrgRightDiv() {
  return (
    <>
      <IoNotificationsOutline
        style={{ fontSize: "28px", marginRight: "40px" }}
        className="notification-icon"
      />
      <div className="profiledropdown">
        {/* Hidden checkbox */}
        <input
          type="checkbox"
          id="dropdownCheckbox"
          className="dropdownCheckbox"
          style={{ display: "none" }}
        />
        {/* Label for the checkbox, which will be the clickable area */}
        <label htmlFor="dropdownCheckbox" className="profileCircleContainer">
          <Profilecircle />
        </label>
        {/* Dropdown content that shows up when checkbox is checked */}
        <ul className="profiledropdownContent">
          <li>
            <a href="#">Account info</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default OrgRightDiv;
