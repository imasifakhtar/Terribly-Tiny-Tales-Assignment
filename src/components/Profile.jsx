import React from "react";
import {
  AiFillStar,
  AiTwotoneLike,
  AiFillEye,
  AiFillHeart,
} from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { RiCopperDiamondFill } from "react-icons/ri";
import Post from "./Post";
import dp from "../assets/dp.jpg";
import cover from "../assets/cover.jpg";

const Profile = ({ userData, totalPosts }) => {
  const renderProfileOverlay = () => {
    if (!userData) return null;

    return (
      <section className="profile-overlay">
        <img src={dp} alt="profile-pic" />
        <div className="details">
          <div className="username flex">
            <h3>{userData.fullName}</h3>
            {userData.isPremium && (
              <span>
                <RiCopperDiamondFill color="#833AB4" />
              </span>
            )}
            {userData.isVerified && (
              <span>
                <MdVerified color="#1DB954" />
              </span>
            )}
          </div>
          <div className="follow">
            <div className="fl-count">
              <h3>{userData.followersCount}</h3>
              <span>Followers</span>
            </div>
            <div className="fl-count">
              <h3>{userData.followingCount}</h3>
              <span>Following</span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const IconComponents = {
    AiFillStar: AiFillStar,
    AiTwotoneLike: AiTwotoneLike,
    AiFillEye: AiFillEye,
    AiFillHeart: AiFillHeart,
  };

  const getIconComponent = (icon, color) => {
    const IconComponent = IconComponents[icon];
    if (IconComponent) {
      return <IconComponent color={color} />;
    }
    return null;
  };

  const renderAboutSection = () => {
    if (!userData) return null;
    return (
      <section className="about">
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
      </section>
    );
  };

  const renderUserPosts = () => {
    if (!userData) return null;

    return (
      <section className="user-posts fl-col">
        <div className="counter">
          <p className="post-count">{totalPosts} Posts</p>
        </div>
        {userData.posts.map((post, i) => (
          <div key={i} className="post">
            <div className="body">
              <div className="heading flex">
                <h3>{post.heading}</h3>
                <AiTwotoneLike color="#f9c935" />
              </div>
              <Post content={post.body} />
              <div className="post-details">
                <p>
                  <span>{post.category}</span> by {post.author}
                </p>
                <p>
                  {post.date} · {post.minutes} min Read · {post.views} Views
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  };

  return (
    <main className="user-profile">
      <div className="cover-picture">
        <img src={cover} alt="cover-pic" />
      </div>

      {renderProfileOverlay()}
      {renderAboutSection()}
      {renderUserPosts()}
    </main>
  );
};

export default Profile;
