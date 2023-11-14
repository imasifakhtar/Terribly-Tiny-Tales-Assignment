import React from "react";
import {
  AiFillStar,
  AiTwotoneLike,
  AiFillEye,
  AiFillHeart,
} from "react-icons/ai";

const Profile = ({ userData }) => {
  const renderProfileOverlay = () => {
    if (!userData) return null;

    return (
      <div className="profile-overlay">
        <img src="https://picsum.photos/150" alt="profile-pic" />
        <div className="details">
          <h3>{userData.fullName}</h3>
          <div className="follow">
            <div className="fl-btn">
              <h3>{userData.followersCount}</h3>
              <span>Followers</span>
            </div>
            <div className="fl-btn">
              <h3>{userData.followingCount}</h3>
              <span>Following</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getIconComponent = (icon, color) => {
    switch (icon) {
      case "AiFillStar":
        return <AiFillStar color={color} />;
      case "AiTwotoneLike":
        return <AiTwotoneLike color={color} />;
      case "AiFillEye":
        return <AiFillEye color={color} />;
      case "AiFillHeart":
        return <AiFillHeart color={color} />;
      default:
        return null;
    }
  };

  const renderAboutSection = () => {
    if (!userData) return null;
    return (
      <div className="about">
        <div className="bio">
          <p>{userData.about}</p>
          <a href={userData.url} id="bio-link">
            {userData.url}
          </a>
        </div>
        <div className="statContainer">
          {userData.statsData.map((stat, index) => (
            <div key={index} className="stat">
              {getIconComponent(stat.icon, stat.color)}
              <span>{stat.count}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderUserPosts = () => {
    if (!userData) return null;

    return (
      <div className="user-posts">
        <div className="post-count">236 Posts</div>
        {userData.posts.map((post, i) => (
          <div key={i} className="post">
            <h2>{post.heading}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="user-profile">
      <div className="cover-picture">
        <img src="https://picsum.photos/455/250" alt="cover-pic" />
      </div>

      {renderProfileOverlay()}
      {renderAboutSection()}
      {renderUserPosts()}
    </div>
  );
};

export default Profile;
