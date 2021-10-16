import React, { useState, useEffect } from "react";
import "./PlayView.css";
import { useHistory } from "react-router-dom";
import Card from "./Components/Card/Card";

function PlayView() {
  let history = useHistory();
  const navigateHome = () => {
    history.push("/");
  };
  const onCardClick = (clickedCard) => {
    if (card1 == null) {
      setCard1(clickedCard);
    } else if (clickedCard.id == card1.id) {
      return;
    } else {
      setCard2(clickedCard);
    }
  };

  const [card1, setCard1] = useState();
  const [card2, setCard2] = useState();

  useEffect(() => {
    if (card1 == null && card2 == null) {
      return;
    }
    if (card1.number == card2.number) {
      setCards(cards.filter((card) => card.number !== card1.number));
    }
    setCard1(null);
    setCard2(null);
  }, [card2]);

  const [cards, setCards] = useState([
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 1 },
    { id: 5, number: 2 },
    { id: 6, number: 3 },
  ]);

  return (
    <div className="background2">
      <div className="arrow" onClick={navigateHome}></div>
      <div className="playview-container">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              isFocused={card == card1}
              handleClick={onCardClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlayView;
