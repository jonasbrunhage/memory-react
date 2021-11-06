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
    if (clickedCard.isFocused || clickedCard.isMatched) {
      return;
    }

    if (clickedCard?.id === card1?.id) {
      return;
    }

    if (card1 === null) {
      setCard1(clickedCard);
    } else {
      setCard2(clickedCard);
    }
  };

  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (card1 === null && card2 === null) {
        return;
      }
      if (card1.number === card2.number) {
        // setCards(cards.filter((card) => card.number !=== card1.number));
        let updatedCards = cards.map((value) => {
          if (value === card1 || value === card2) {
            value.isMatched = true;
            return value;
          }
          return value;
        });
        setCards(updatedCards);
      }
      setCard1(null);
      setCard2(null);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [card2]);

  const [cards, setCards] = useState([
    { id: 1, number: 1, isMatched: false },
    { id: 2, number: 2, isMatched: false },
    { id: 3, number: 3, isMatched: false },
    { id: 4, number: 1, isMatched: false },
    { id: 5, number: 2, isMatched: false },
    { id: 6, number: 3, isMatched: false },
  ]);

  return (
    <div className="background2">
      <div className="arrow" onClick={navigateHome}></div>
      <div className="playview-container">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              isFocused={card === card1 || card === card2}
              handleClick={onCardClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlayView;
