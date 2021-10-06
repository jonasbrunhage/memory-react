import React, { useState } from "react";
import "./PlayView.css";
import { useHistory } from "react-router-dom";
import Card from "./Components/Card/Card";

function PlayView() {
  let history = useHistory();
  const handleClick2 = () => {
    history.push("/");
  };
  const onCardClick = (siffra) => {
    setNummer(siffra);
    // setCardNumbers([1, 2, 3, 4]);

    setCardNumbers(cardNumbers.filter((item) => item !== siffra));
  };

  const [nummer, setNummer] = useState();

  const [cardNumbers, setCardNumbers] = useState([1, 2, 3, 1, 2, 3]);

  return (
    <div className="background2">
      <div className="arrow" onClick={handleClick2}></div>
      <div className="playview-container">
        {/* <Card value={1} handleClick={onCardClick} />
        <Card value={2} handleClick={onCardClick} />
        <Card value={1} handleClick={onCardClick} />
        <Card value={2} handleClick={onCardClick} /> */}
        <p>{nummer}</p>
        {cardNumbers.map((value) => {
          return <Card value={value} handleClick={onCardClick} />;
        })}
      </div>
    </div>
  );
}

export default PlayView;
