import logo from "./logo.svg";
import "./App.css";
import solid_star from "./imgs/star-solid.svg";
import regular_star from "./imgs/star-regular.svg";
import React, { useState } from "react";
function App() {
  let [clicked, setClicked] = useState([false, false, false, false, false]);

  function status(e, index) {
    e.preventDefault();
    let clickedStates = [...clicked];

    if (index === 0 && clicked[0] === true && clicked[1] === false) {
      clickedStates[0] = false;
    } else {
      for (let i = 0; i < 5; i++) {
        if (i <= index) clickedStates[i] = true;
        else clickedStates[i] = false;
      }
    }
    setClicked(clickedStates);
  }
  return (
    <>
      <Star />
    </>
  );
  function Star() {
    return (
      <>
        <img
          id="star1"
          src={clicked[0] ? solid_star : regular_star}
          width="25px"
          height="25px"
          onClick={(e) => status(e, 0)}
          alt="star"
        />
        <img
          id="star2"
          src={clicked[1] ? solid_star : regular_star}
          width="25px"
          height="25px"
          onClick={(e) => status(e, 1)}
          alt="star"
        />
        <img
          id="star3"
          src={clicked[2] ? solid_star : regular_star}
          width="25px"
          height="25px"
          onClick={(e) => status(e, 2)}
          alt="star"
        />
        <img
          id="star4"
          src={clicked[3] ? solid_star : regular_star}
          width="25px"
          height="25px"
          onClick={(e) => status(e, 3)}
          alt="star"
        />
        <img
          id="star5"
          src={clicked[4] ? solid_star : regular_star}
          width="25px"
          height="25px"
          onClick={(e) => status(e, 4)}
          alt="star"
        />
      </>
    );
  }
}
export default App;
