import React from "react";

const Posts = ({ userData }) => {
  return (
    <div className="user-posts">
      <div className="post-count">236 Posts</div>

      {userData && userData.posts.map((post, i) => (
        <div key={i} className="post">
          <h2>{post.heading}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
