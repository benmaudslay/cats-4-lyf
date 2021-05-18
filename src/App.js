import { useState, useEffect } from "react";

import "./App.css";
import basketIcon from "./assets/images/icons8-basket-64.png";

import { Card } from "./components";

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    try {
      let response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=20"
      );
      let data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
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
            <div className="basket">
              <img src={basketIcon} alt="Basket" />
            </div>
          </header>
          <div className="card-container">
            {data.map((item) => (
              <Card data={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default App;
