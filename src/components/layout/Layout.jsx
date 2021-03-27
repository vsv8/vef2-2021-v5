import React from 'react';
import Helmet from 'react-helmet';
// TODO sækja Sass
//eslint-disable-next-line
export function Layout({ children }) {
  // TODO setja upp layout fyrir vef
  return (
    <div>
      <header>
        <Helmet title="Fréttir" />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <span>
          <p>Fréttir frá <a href="https://www.ruv.is/">RÚV.</a></p>
        </span>
      </footer>
    </div>
  );
}
