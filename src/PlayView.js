import React, { useState, useEffect } from "react";
import "./PlayView.css";
import { useHistory } from "react-router-dom";
import Card from "./Components/Card/Card";

function PlayView() {
  let history = useHistory();
  const handleClick2 = () => {
    history.push("/");
  };
  const onCardClick = (objekt) => {
    // setCardNumbers([1, 2, 3, 4]);

    //
    if (kort1 == null) {
      setKort1(objekt);
    } else if (objekt.id == kort1.id) {
      return;
    } else {
      setKort2(objekt);
    }
  };

  const [kort1, setKort1] = useState();
  const [kort2, setKort2] = useState();

  useEffect(() => {
    if (kort1 == null && kort2 == null) {
      return;
    }
    if (kort1.kortnummer == kort2.kortnummer) {
      setCardNumbers(
        cardNumbers.filter((item) => item.kortnummer !== kort1.kortnummer)
      );
    }
    setKort1(null);
    setKort2(null);
  }, [kort2]);

  const [cardNumbers, setCardNumbers] = useState([
    { id: "1", kortnummer: "1" },
    { id: "2", kortnummer: "2" },
    { id: "3", kortnummer: "3" },
    { id: "4", kortnummer: "1" },
    { id: "5", kortnummer: "2" },
    { id: "6", kortnummer: "3" },
  ]);

  return (
    <div className="background2">
      <div className="arrow" onClick={handleClick2}></div>
      <div className="playview-container">
        {/* <Card value={1} handleClick={onCardClick} />
        <Card value={2} handleClick={onCardClick} />
        <Card value={1} handleClick={onCardClick} />
        <Card value={2} handleClick={onCardClick} /> */}
        {/* <p>{nummer}</p> */}
        {cardNumbers.map((värde) => {
          return (
            <Card
              cardValue={värde}
              isFocused={värde == kort1}
              handleClick={onCardClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlayView;
