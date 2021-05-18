const Card = ({ data }) => {
  return (
    <div>
      <img src={data.src} alt="Cat" />
      <p>
        <b>{data.id}</b>
      </p>
    </div>
  );
};

export default Card;
