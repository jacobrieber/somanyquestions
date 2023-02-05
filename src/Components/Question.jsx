import React from "react";
import questionList from "../questionList";

function Question(props) {
  return (
    <div className="question">
      <div className="questionContent">
        <h1>Here's something to think about.</h1>
        <img
          className="questionImage"
          src={questionList[props.question].url}
          alt={questionList[props.question].altText}
        />
        <p>{questionList[props.question].question}</p>
      </div>
    </div>
  );
}

export default Question;
