import "./Card.css";

function Card({ value2, isFocused, handleClick }) {
  //   const handleClick = () => {
  //     console.log(value);
  //   };

  return (
    <div className="card" onClick={() => handleClick(value2)}>
      {value2}
      {isFocused == true ? "selected" : ""}
    </div>
  );
}
export default Card;
