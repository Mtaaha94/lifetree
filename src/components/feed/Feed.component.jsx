import React from "react";
// ? Styles
import "./feed.styles.scss";

const Feed = ({ image, user: { name, picture }, text, comments }) => {
  return (
    <div className="feed">
      <div className="feed-header">
        <div className="detail">
          <img src={picture} alt="" />
          <p>{name}</p>
        </div>
        <div className="date">
          <ul>
            <li>Today</li>
            <li>11:24 PM</li>
          </ul>
        </div>
      </div>

      <div className="feed-body">
        <p>{text}</p>
        <img src={image} alt={`feed by ${name}`} />
      </div>

      <div className="feed-footer">
        <p>Write a Comment</p>
        <p>View Comments {comments}</p>
      </div>
    </div>
  );
};

export default Feed;
