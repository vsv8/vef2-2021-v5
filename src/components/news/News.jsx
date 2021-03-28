import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;

export function News({ category, partial }) {
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
    return (
      <div class="news__loading">
        <p>Villa kom upp: {error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div class="news__loading">
        <p>Sæki gögn...</p>
      </div>
    );
  }

  if (data) {
    let news = data.items;
    const route = partial ? `/${category}` : '/';

    if (partial) {
      news = news.slice(0,5);
    }

    return (
      <div class={partial ? "news__category__frontpage" : "news__category"}>
        <h3>{data.title}</h3>
        <div>
          {news.map((n) => {
            return (
              <li class="news__item">
                <a href={n.link}>{n.title}</a>
              </li>);
          })}
        </div>
        <Link to={route} class="news__category__link">
          {partial ? "Allar fréttir" : "Til baka"}
        </Link>
      </div>
    )
  }

  return (
    <div class="news__loading">
      <p>Villa kom upp: Gat ekki sótt fréttir.</p>
    </div>
  );
}
