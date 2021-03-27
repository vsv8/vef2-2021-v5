import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;

export function News({ category, partial }) {
  // TODO sækja fréttir fyrir flokk
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    async function fetchData() {
      setLoading(true);
      setError(null);

      const categoryURL = `${apiUrl}${category}`;
      console.log(categoryURL);
      let result;
      try {
        result = await fetch(categoryURL);
        result = await result.json();
      } catch (e) {
        setError('Villa við að sækja gögn');
        return;
      } finally {
        setLoading(false);
      }
      setData(result);
    }
    fetchData();
  }, [category]);

  if (error) {
    return <p>Villa kom upp: {error}</p>
  }

  if (loading) {
    return <p>Sæki gögn...</p>
  }

  if (data) {
    let news = data.items;

    console.log(news);
    const route = partial ? `/${category}` : '/';

    if (partial) {
      news = news.slice(0,5);
    }

    return (
      <div>
        <h3>{data.title}</h3>
        {news.map((n) => {
          return (
            <li>
              <a href={n.link}>{n.title}</a>
            </li>);
        })}
        <Link to={route} >
          {partial ? "Allar fréttir" : "Til baka"}
        </Link>
      </div>
    )
  }

  return <p>Villa kom upp: Gat ekki sótt fréttir.</p>
}
