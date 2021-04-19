import React from "react";
// ? Styles
import "./userContainer.styles.scss";
// ? Svg Icons
import statusRed from "../../assests/circle-red.svg";
import statusGreen from "../../assests/circle-green.svg";

const UserContainer = ({ name, photo, status }) => {
  return (
    <div className="user-detail">
      <div className="detail">
        <img src={photo} alt="user" />
        <h5>{name}</h5>
      </div>
      <img
        src={status ? statusGreen : statusRed}
        className="status"
        alt="status"
      />
    </div>
  );
};

export default UserContainer;
