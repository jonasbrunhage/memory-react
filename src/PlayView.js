import React, { useState, useEffect } from "react";
import "./PlayView.css";
import { useHistory } from "react-router-dom";
import Card from "./Components/Card/Card";

function PlayView() {
  let history = useHistory();
  const handleClick2 = () => {
    history.push("/");
  };
  const onCardClick = (siffra1) => {
    // setCardNumbers([1, 2, 3, 4]);

    //
    if (nummer == null) {
      setNummer(siffra1);
    } else {
      setNummer2(siffra1);
    }
  };

  const [nummer, setNummer] = useState();
  const [nummer2, setNummer2] = useState();

  useEffect(() => {
    if (nummer == nummer2) {
      setCardNumbers(cardNumbers.filter((item) => item !== nummer));
    }
    setNummer(null);
    setNummer2(null);
  }, [nummer2]);

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
        {cardNumbers.map((värde) => {
          return (
            <Card
              value2={värde}
              isFocused={värde == nummer}
              handleClick={onCardClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlayView;
