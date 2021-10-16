import "./Card.css";

function Card({ card, isFocused, handleClick }) {
  //   const handleClick = () => {
  //     console.log(value);
  //   };

  return (
    <div className="card" onClick={() => handleClick(card)}>
      {card.number}
      <span>id:{card.id}</span>
      {isFocused == true ? "selected" : ""}
    </div>
  );
}
export default Card;
