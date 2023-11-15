import React, { useState } from "react";

const Post = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderContent = () => {
    const wordsArray = content.split(" ");

    if (wordsArray.length <= 25 || isExpanded) {
      return content;
    } else {
      const truncatedContent = wordsArray.slice(0, 25).join(" ");
      return (
        <>
          {truncatedContent} ...
          <button className="read-more" onClick={toggleExpand}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </>
      );
    }
  };

  return (
      <p>{renderContent()}</p>
  );
};

export default Post;
