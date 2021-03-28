import React from 'react';
import Helmet from 'react-helmet';
import '../../styles.scss';

export function Layout({ children }) {
  return (
    <div>
      <header>
        <Helmet title="Fréttir" />
        <h1>RÚV Fréttir</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <hr></hr>
        <p>Fréttir frá <a href="https://www.ruv.is/">RÚV.</a></p>
      </footer>
    </div>
  );
}
