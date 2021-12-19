import React, { useState, useEffect } from "react";
import "./PlayView.css";
import { useHistory } from "react-router-dom";
import Card from "./Components/Card/Card";
import { PlayCardList, startingCards } from "./CardLists";

// const startingCards = [
//   { id: 1, number: 1, isMatched: false },
//   { id: 2, number: 2, isMatched: false },
//   { id: 3, number: 3, isMatched: false },
//   { id: 4, number: 1, isMatched: false },
//   { id: 5, number: 2, isMatched: false },
//   { id: 6, number: 3, isMatched: false },
// ];

function PlayView() {
  let history = useHistory();
  const navigateHome = () => {
    history.push("/");
  };
  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [cardsDisabled, setCardsDisabled] = useState(false);
  const [cards, setCards] = useState([]);
  const [poäng, setPoäng] = useState(0);
  const [procent, setProcent] = useState(0);

  const [tries, setTries] = useState(0);

  const [winMessage, setWinMessage] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (card1 === null || card2 === null) {
        return;
      }
      if (card1.number === card2.number) {
        // setCards(cards.filter((card) => card.number !=== card1.number));
        updateCardListWithAMatch();
      }
      setCard1(null);
      setCard2(null);
      setCardsDisabled(false);
    }, 1200);
    return () => clearTimeout(timeout);
  }, [card2]);

  useEffect(() => {
    // setRandomShuffledList();
    setShuffledList(startingCards);
  }, []);

  useEffect(() => {
    let points = 0;
    // const cardsThatareTrue = cards.filter((item) => item.isMatched === true);
    // alert(cardsThatareTrue.length);
    for (let item of cards) {
      if (item.isMatched === true) {
        points += 1;
      }

      console.log(points);
    }
    setPoäng(points / 2);
    // setProcent((poäng / tries) * 100);
  }, [cards]);

  // useEffect(() => {
  //   let försök = 0;
  //   // for (let card of cards) {
  //   //   if (card2 === card) {
  //   if (cardsDisabled) {
  //     setTries(försök + 1);
  //   }
  // }, [cards]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const cardsThatareTrue = cards.filter((item) => item.isMatched === true);
      if (cardsThatareTrue.length === cards.length) {
        setWinMessage("You have won!!!!!!!");
        console.log(`poäng: ${poäng} tries: ${tries}`);
      }
    }, 800);
    return () => clearTimeout(timeout);
  }, [cards]);

  useEffect(() => {
    if (poäng === 0 || tries === 0) return;

    setProcent((poäng / tries) * 100);
  }, [tries, poäng]);

  const onCardClick = (clickedCard) => {
    // let försök = 0;
    console.log(clickedCard);
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
      setTries(tries + 1);

      console.log(tries);
    }
  };

  const setRandomShuffledList = () => {
    const index = Math.floor(Math.random() * PlayCardList.length);
    // const shuffled = PlayCardList[index].sort(() => Math.random() - 0.5);
    // setCards(shuffled);
    setShuffledList(PlayCardList[index]);
  };

  const setShuffledList = (cardList) => {
    const shuffled = cardList.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const updateCardListWithAMatch = () => {
    let updatedCards = cards.map((value) => {
      if (value === card1 || value === card2) {
        value.isMatched = true;
        return value;
      }
      return value;
    });
    setCards(updatedCards);
  };
  //check cards with useeffect
  //somehow deside if we have won
  //start make alert or console.log when all is matched
  //loop for see if all is matched maybe

  //state useefect metoder 1 2 3
  // console.log(procent);
  function refreshPage() {
    window.location.reload(false);
  }

  const procentMessage = (procentValue) => {
    if (procentValue <= 40) {
      return "Try harder";
    } else if (procentValue <= 60) {
      return "Good good";
    }

    return "You had over 80%, Good Work!";
  };

  return (
    <div className="background2">
      <div className="arrow" onClick={() => navigateHome()}></div>
      <div className="playview-container">
        <div className="vinnar-text">{winMessage}</div>
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
        <div>Tries: {tries}</div>
        <div>Points: {poäng}</div>
        <div>{winMessage && procentMessage(procent)}</div>

        {/* {<div className="vinnar-text">{winMessage}</div>} */}
        {/* <button onClick={reloadPage}>Restart</button> */}
        <button onClick={refreshPage}>Click to reload!</button>
      </div>
    </div>
  );
}

export default PlayView;
