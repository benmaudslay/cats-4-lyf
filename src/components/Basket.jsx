import CheckoutCard from "./CheckoutCard";

const Basket = ({ basketData, removeProduct }) => {
  return (
    <div className="modalWrapper">
      <h2>Basket</h2>
      {basketData.length > 0 &&
        basketData.map((item, index) => {
          return (
            <CheckoutCard
              key={index}
              product={item}
              removeProduct={() => removeProduct(index)}
            />
          );
        })}
    </div>
  );
};

export default Basket;
