import React from "react";
import questionList from "../questionList";

function NavBar(props) {
  function changeQuestion() {
    const numberofQuestions = questionList.length;
    const questionPosition = Math.floor(Math.random() * numberofQuestions);
    props.getClick(questionPosition);
  }

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
          src="/Images/list.png"
          className="link navItem"
          alt="full question list button"
          title="See full list of questions"
        ></img>
      </a>
      <img
        src="/Images/shuffle.png"
        className="link navItem"
        alt="shuffle button"
        title="View a new question"
        onClick={changeQuestion}
      ></img>
    </div>
  );
}

export default NavBar;
