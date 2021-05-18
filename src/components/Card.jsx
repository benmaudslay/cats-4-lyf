import "./Card.css";
import plusIcon from "../assets/images/icons8-plus-math-48.png";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.url} alt="Cat" />
      <div className="bottom-row">
        <p>
          <b>{data.id}</b>
        </p>
        <button className="add-btn">
          <img src={plusIcon} alt="Add" />
        </button>
      </div>
    </div>
  );
};

export default Card;
