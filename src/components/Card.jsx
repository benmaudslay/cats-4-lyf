import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.url} alt="Cat" />
      <p>
        <b>{data.id}</b>
      </p>
    </div>
  );
};

export default Card;
