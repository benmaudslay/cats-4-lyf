import "./App.css";
import { useState, useEffect } from "react";

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
        <div className="card-container">
          {data.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </>
    );
  }
};

export default App;
