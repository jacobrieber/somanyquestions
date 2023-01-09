import React from "react";

function Question() {
  return (
    <div className="question">
      <div className="questionContent">
        <h1>Here's something to think about.</h1>
        <img
          className="questionImage"
          src="/Images/Professor Utonium.png"
          // src="/Images/The sisters.jpeg"
          alt="Professor Utonium"
        />
        <p>
          Professor Utonium made the Powerpuff Girls out of sugar, spice, and
          everything nice (and Chemical X). What ingredients would he use if he
          were trying to make you?
        </p>
      </div>
    </div>
  );
}

export default Question;
