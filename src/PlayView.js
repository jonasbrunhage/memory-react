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
    if (procent < 30) {
      return (
        <div className="frame">
          <p className="playview-procent">{winPercentWithOneDecimal}%</p>
          <p className="playview-quote">
            You need click on the pictures that are the same
          </p>
          <p className="playview-small-quote">
            Maybe I should include the rules for this game
          </p>
        </div>
      );
    } else if (procent >= 30 && procent < 43) {
      return (
        <div className="frame">
          <p className="playview-procent">{winPercentWithOneDecimal}%</p>
          <p className="playview-quote">This is a memory game</p>
          <p className="playview-small-quote">
            Not the time for a walk down memory lane
          </p>
        </div>
      );
    } else if (procent > 43 && procent < 50) {
      return (
        <div className="frame">
          <p className="playview-procent">{winPercentWithOneDecimal}%</p>
          <p className="playview-quote">I dont know if that was bad or good</p>
          <p className="playview-small-quote">Try again you should</p>
        </div>
      );
    } else if (procent === 50) {
      return (
        <div className="frame">
          <p className="playview-procent">{winPercentWithOneDecimal}%</p>
          <p className="playview-quote">Like you solved a memory riddle</p>
          <p className="playview-small-quote">
            You ended up right in the middle
          </p>
        </div>
      );
    } else if (procent > 50 && procent < 58) {
      return (
        <div className="frame">
          <p className="playview-procent">{winPercentWithOneDecimal}%</p>
          <p className="playview-quote">You right more the half the time</p>
          <p className="playview-small-quote">
            With this skill in life you could really climb
          </p>
        </div>
      );
    } else if (procent > 58 && procent < 65) {
      return (
        <div className="frame">
          <p className="playview-procent">{winPercentWithOneDecimal}%</p>
          <p className="playview-quote">This is some impressive play</p>
          <p className="playview-small-quote">Things really going your way</p>
        </div>
      );
    } else if (procent > 65 && procent < 76) {
      return (
        <div className="frame">
          <p className="playview-procent">{winPercentWithOneDecimal}%</p>
          <p className="playview-quote">
            My mind just exploded like a supernova
          </p>
          <p className="playview-small-quote">
            You are a real life Pokémon Yoda
          </p>
        </div>
      );
    }
    return (
      <div className="frame">
        <p className="playview-procent">{winPercentWithOneDecimal}%</p>
        <p className="playview-quote">You are a giant amongst men</p>
        <p className="playview-small-quote">If not, you clairvoyant then</p>
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
