import React from "react";

function NavBar() {
  return (
    <div className="navigation">
      <a href="about.html">
        <img
          src="/Images/question.png"
          className="link navItem"
          alt="question mark"
          title="Learn more"
        ></img>
      </a>
      <a href="https://www.youtube.com/">
        <img
          src="/Images/upload.png"
          className="link navItem"
          alt="upload button"
          title="Submit a question"
        ></img>
      </a>
      <a href="https://www.youtube.com/">
        <img
          src="/Images/list.png"
          className="link navItem"
          alt="full question list button"
          title="See full list of questions"
        ></img>
      </a>
      <a href="https://www.youtube.com/">
        <img
          src="/Images/shuffle.png"
          className="link navItem"
          alt="shuffle button"
          title="View a new question"
        ></img>
      </a>
    </div>
  );
}

export default NavBar;
