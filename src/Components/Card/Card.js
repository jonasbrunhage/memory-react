import "./Card.css";

function Card({ card, isFocused, handleClick, isDisabled }) {
  const showCard = () => {
    if (isFocused || card.isMatched) {
      return "reverse";
    } else {
      return "";
    }
  };

  return (
    <div className="flip-card" onClick={() => !isDisabled && handleClick(card)}>
      <div className={`flip-card-inner ${showCard()}`}>
        <div className="flip-card-front">
          <img src="\memory-cards.png" alt="Avatar" width={200} height={200} />
        </div>
        <div className={`flip-card-back ${card.isMatched ? "matched" : ""}`}>
          {/* <h2>{card.number}</h2> */}
          <img src={card.src} width={200} height={200} />
          {/* <img>{card.src}</img> */}
          {/* <img src="\logo192.png" /> */}
          {/* <img src="\logo512.png" alt="Avatar2" width={200} height={200} /> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
