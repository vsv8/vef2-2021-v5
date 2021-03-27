import React, { useEffect, useState } from 'react';

import { News } from "../news/News";

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList() {
  // TODO sækja yfirlit fréttaflokka

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

  console.log("hl");

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
      setLoading(true);
      setError(null);
      let result;
      try {
        result = await fetch(apiUrl);
        
        if (!result.ok) {
          // if (result.status === 404) {
          //   setError("404: Page Not Found");
          //   return;
          // }
          throw new Error("Villa að ná í gögn");
        }
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
    return <p>Sæki gögn...</p>;
  }
  
  const items = Array.from(data);
  console.log(items);

  return (
    <div>
      {items.map((item) => { 
        return (
          <News category={item.id} partial={true} />
        );
      })}
    </div>
  );
}