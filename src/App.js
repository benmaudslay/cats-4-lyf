import { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";

import "react-responsive-modal/styles.css";
import "./App.css";
import basketIcon from "./assets/images/icons8-basket-64.png";

import { Card, Basket } from "./components";
import { addFakeData } from "./utils/manipulateData";

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      let response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=20"
      );
      let data = await response.json();
      let updatedData = await addFakeData(data);
      setData(updatedData);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleBasketAdding = (productIndex) => {
    setBasket([...basket, data[productIndex]]);
  };

  const removeProduct = (productIndex) => {
    let newBasket = [...basket];
    newBasket.splice(productIndex, 1);
    setBasket(newBasket);
  };

  if (error) {
    return <p>An error has occurred</p>;
  } else if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div className="wrapper">
          <header>
            <h1>Cats4Lyf</h1>
            <div className="basket" onClick={() => setOpen(true)}>
              <img src={basketIcon} alt="Basket" />
            </div>
          </header>
          <div className="card-container">
            {data.map((item, index) => (
              <Card
                key={index}
                data={item}
                addItem={() => handleBasketAdding(index)}
              />
            ))}
          </div>
          <Modal open={open} onClose={() => setOpen(false)} center>
            <Basket basketData={basket} removeProduct={removeProduct} />
          </Modal>
        </div>
      </>
    );
  }
};

export default App;
