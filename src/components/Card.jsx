const Card = ({ data }) => {
  return (
    <div>
      <img src={data.url} alt="Cat" />
      <p>
        <b>{data.id}</b>
      </p>
    </div>
  );
};

export default Card;
