const CheckoutCard = ({ product, key, removeProduct }) => {
  return (
    <div className="checkoutCard">
      <div className="info">
        <h1>{product.name}</h1>
        <p>£{product.price}</p>
      </div>
      <button onClick={removeProduct}>Remove</button>
    </div>
  );
};

export default CheckoutCard;
