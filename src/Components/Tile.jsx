import React, { useState } from "react";
import Question from "./Question";
import NavBar from "./NavBar";

function Tile() {
  const [questionNum, setquestionNum] = useState(0);
  
  function getNumber(num) {
    setquestionNum(num);
  }

  return (
    <div>
      <div className="tile">
        <img
          className="monsterHead"
          src="/Images/Monster head.svg"
          alt="Monster head"
        />
        <img
          className="leftHand"
          src="/Images/Left hand.svg"
          alt="Monster hand"
        />
        <img
          className="rightHand"
          src="/Images/Right hand.svg"
          alt="Monster hand"
        />
        <div className="leftDot dot"></div>
        <div className="rightDot dot"></div>
        <Question question = {questionNum} />
        <NavBar getClick = {getNumber} />
      </div>
    </div>
  );
}

export default Tile;
