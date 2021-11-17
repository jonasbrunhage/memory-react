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
      setCardsDisabled(true);
    }
  };

  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [cardsDisabled, setCardsDisabled] = useState(false);

  const reloadPage = () => {
    history.push("/play");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(card1);
      if (card1 === null || card2 === null) {
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
      setCardsDisabled(false);
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

  const [poäng, setPoäng] = useState(0);
  useEffect(() => {
    let points = 0;
    // const cardsThatareTrue = cards.filter((item) => item.isMatched === true);
    // alert(cardsThatareTrue.length);
    for (let item of cards) {
      if (item.isMatched === true) {
        points += 1;
      }
    }
    setPoäng(points / 2);
  }, [cards]);
  useEffect(() => {
    const cardsThatareTrue = cards.filter((item) => item.isMatched === true);
    if (cardsThatareTrue.length === cards.length) {
      setWinMessage("You have won!!!!!!!");
    }
    // for (let item of cards) {
    //   if (item.isMatched == true) {
    //     setWinMessage("You have won!!!!!!!");
    //   }
    // }
  }, [cards]);

  const [winMessage, setWinMessage] = useState("");
  // useEffect(() => {
  //   // const score = cards.filter((item) => item.isMatched === true);
  //   // setScore(score);
  //   for (let kort of cards) {
  //     if (kort.isMatched === true) {
  //       setScore = "won";
  //     }
  //   }
  // }, [cards]);

  //check cards with useeffect
  //somehow deside if we have won
  //start make alert or console.log when all is matched
  //loop for see if all is matched maybe

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="background2">
      <div className="arrow" onClick={navigateHome}></div>
      <div className="playview-container">
        {<div className="vinnar-text">{winMessage}</div>}
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              isFocused={card === card1 || card === card2}
              handleClick={onCardClick}
              isDisabled={cardsDisabled}
            />
          );
        })}
      </div>
      <div className=" info-container">
        <div>Points: {poäng}</div>
        {/* {<div className="vinnar-text">{winMessage}</div>} */}
        <button onClick={reloadPage}>Restart</button>
        <button onClick={refreshPage}>Click to reload!</button>
      </div>
    </div>
  );
}

export default PlayView;
