import React from "react";
import {
  AiFillStar,
  AiTwotoneLike,
  AiFillEye,
  AiFillHeart,
} from "react-icons/ai";

const Profile = ({ userData }) => {
  return (
    <div className="profile">
      <img src="https://picsum.photos/460/250" alt="cover-pic" />
      <div className="user">
        <img src="https://picsum.photos/150" alt="profile-pic" />

        {userData && (
          <div className="info">
            <div className="name">
              <h3>{userData.fullName}</h3>
            </div>

            <div className="follow">
              <div className="fl-btn">
                <button>{userData.followersCount}</button>
                <span>Followers</span>
              </div>
              <div className="fl-btn">
                <button>{userData.followingCount}</button>
                <span>Following</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {userData && (
        <div className="about">
          <p>{userData.about}</p>
          <p>{userData.url}</p>

          <div className="statContainer">
            <div className="stat">
              <AiFillStar color="#1DA1F2"/>
              <span>{userData.stars}</span>
            </div>
            <div className="stat">
              <AiTwotoneLike color="#f9c935"/>
              <span>{userData.likes}</span>
            </div>
            <div className="stat">
              <AiFillEye color="#808080"/>
              <span>{userData.views}</span>
            </div>
            <div className="stat">
              <AiFillHeart color="#ff0050"/>
              <span>{userData.hearts}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
