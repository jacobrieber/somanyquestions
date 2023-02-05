import React from "react";
import Tile from "./Tile";
import Footer from "./Footer";

function App() {
  //Add eye tracking
  const pos = { x: 0, y: 0 };

  const saveCursorPosition = function (x, y) {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty("--x", pos.x);
    document.documentElement.style.setProperty("--y", pos.y);
  };

  document.addEventListener("mousemove", (e) => {
    saveCursorPosition(e.clientX, e.clientY);
  });

  //Add eye expressions
  const leftEye = document.getElementsByClassName("leftDot");
  const rightEye = document.getElementsByClassName("rightDot");
  const link = document.getElementsByClassName("link");

  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("mouseenter", (e) => {
      leftEye[0].style.width = "25px";
      rightEye[0].style.width = "25px";
    });
  }

  for (var j = 0; j < link.length; j++) {
    link[j].addEventListener("mouseleave", (e) => {
      leftEye[0].style.width = "15px";
      rightEye[0].style.width = "15px";
    });
  }

  return (
    <div>
      <Tile />
      <Footer />
    </div>
  );
}

export default App;
