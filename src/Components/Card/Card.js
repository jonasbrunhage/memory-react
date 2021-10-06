import "./Card.css";

function Card({ value, handleClick }) {
  //   const handleClick = () => {
  //     console.log(value);
  //   };

  return (
    <div className="card" onClick={() => handleClick(value)}>
      {value}
    </div>
  );
}
export default Card;
