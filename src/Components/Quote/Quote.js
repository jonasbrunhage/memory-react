// function Quotes({ mainQuote, subQuote }) {
//   return (
//     <div className="frame3">
//       {/* <p className="playview-procent">{winPercentWithOneDecimal}%</p> */}
//       <p className="playview-quote3">{mainQuote}</p>
//       <p className="playview-small-quote3">{subQuote}</p>
//     </div>
//   );
// }
import "./Quote.css";
const Quote = ({ mainQuote, subQuote, percent }) => {
  var winPercentWithOneDecimal = parseFloat(percent).toFixed(1);
  return (
    <div className="frame">
      <p className="playview-procent">{winPercentWithOneDecimal}%</p>
      <p className="playview-quote">{mainQuote}</p>
      <p className="playview-small-quote">{subQuote}</p>
    </div>
  );
};

export default Quote;
