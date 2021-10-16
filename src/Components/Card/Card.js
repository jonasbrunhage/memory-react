import "./Card.css";

function Card({ cardValue, isFocused, handleClick }) {
  //   const handleClick = () => {
  //     console.log(value);
  //   };

  return (
    <div className="card" onClick={() => handleClick(cardValue)}>
      {cardValue.kortnummer}
      <span>id:{cardValue.id}</span>
      {isFocused == true ? "selected" : ""}
    </div>
  );
}
export default Card;
