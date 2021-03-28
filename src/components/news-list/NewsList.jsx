import React, { useEffect, useState } from 'react';

import { News } from "../news/News";

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
      setLoading(true);
      setError(null);
      let result;
      try {
        result = await fetch(apiUrl);
        result = await result.json();
      } catch (e) {
        setError('Villa við að sækja gögn');
        return;
      } finally {
        setLoading(false);
      }
      console.log(result);
      setData(result);
    }
    fetchData();
  }, []);

  if (error) {
    return (
      <p>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }
  
  const items = Array.from(data);

  return (
    <div class="news__container">
      {items.map((item) => { 
        return (
          <News category={item.id} partial={true} />
        );
      })}
    </div>
  );
}