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
          <h2>{card.number}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
