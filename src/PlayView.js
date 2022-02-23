import React, { useState, useEffect } from "react";
import "./PlayView.css";
import { useHistory, useLocation } from "react-router-dom";
import Card from "./Components/Card/Card";
import { PlayCardList } from "./CardLists";

function PlayView() {
  let history = useHistory();
  const navigateHome = () => {
    history.push(`/`);
    window.location.reload(false);
  };

  const searchParams = useLocation().search;

  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [cardsDisabled, setCardsDisabled] = useState(false);
  const [cards, setCards] = useState([]);
  const [poäng, setPoäng] = useState(0);
  const [procent, setProcent] = useState(0);
  const [tries, setTries] = useState(0);
  const [winMessage, setWinMessage] = useState("");

  useEffect(() => {
    if (card1 === null || card2 === null) {
      return;
    }
    const timeout = setTimeout(() => {
      if (card1.number === card2.number) {
        updateCardListWithAMatch();
      }
      setCard1(null);
      setCard2(null);
      setCardsDisabled(false);
    }, 1200);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card2, card1]);

  useEffect(() => {
    const squareAmount = parseInt(
      new URLSearchParams(searchParams).get("square-amounts")
    );

    if (squareAmount === 12) {
      setShuffledList(PlayCardList[0]);
    } else if (squareAmount === 16) {
      setShuffledList(PlayCardList[1]);
    } else {
      setShuffledList(PlayCardList[2]);
    }
  }, [searchParams]);

  useEffect(() => {
    let points = 0;
    for (let item of cards) {
      if (item.isMatched === true) {
        points += 1;
      }
    }
    setPoäng(points / 2);
  }, [cards]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const cardsThatareTrue = cards.filter((item) => item.isMatched === true);
      if (cardsThatareTrue.length === cards.length) {
        setWinMessage("You have won!!!!!!!");
      }
    }, 800);
    return () => clearTimeout(timeout);
  }, [cards]);

  useEffect(() => {
    if (poäng === 0 || tries === 0) return;

    setProcent((poäng / tries) * 100);
  }, [tries, poäng]);

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
      setTries(tries + 1);
    }
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

  function refreshPage() {
    window.location.reload();
  }

  const procentMessage = () => {
    var winPercentWithOneDecimal = parseFloat(procent).toFixed(1);
    if (procent <= 40) {
      return (
        <div className="frame">
          <p className="playview-quote">
            Blub blub 🐟, you got {winPercentWithOneDecimal}%
          </p>
          <p className="playview-small-quote">It can only be better</p>
        </div>
      );
    } else if (procent <= 60) {
      return (
        <div className="frame">
          <p className="playview-quote">
            You had over 60%, Good Work! 🐐" {winPercentWithOneDecimal}%
          </p>
          <p className="playview-small-quote">fffff</p>
        </div>
      );
    }

    return (
      <div className="frame">
        <p className="playview-quote">
          You had over 80%, Good Work! 🐐" {winPercentWithOneDecimal}%
        </p>
        <p className="playview-small-quote">fffff</p>
      </div>
    );
  };
  const image = () => {
    return <img className="ash" src="\pngegg13.png" alt="card-pic"></img>;
  };

  return (
    <div className="playview-wrapper">
      <div className="playview-points">
        <p>
          Tries: <span className="playview-tries-value">{tries}</span>
        </p>
        <p>Points: {poäng}</p>
      </div>
      <div className="playview-container">
        <div className="playview-win-message">{winMessage}</div>
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
      <div className="info-container">
        <div className="playview-message">{winMessage && procentMessage()}</div>
        {winMessage && image()}
        <div className="playview-buttons">
          <button onClick={refreshPage}>
            <img src="\redo-alt-solid.svg" alt="redo"></img>
          </button>
          <button onClick={navigateHome}>
            <img src="\home-solid.svg" alt="home"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayView;
