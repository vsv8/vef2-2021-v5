import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <React.Fragment>
      <Helmet title="404 Villa"/>
      <h1>Síða fannst ekki
        <Link to="/">Til baka</Link>
      </h1>
    </React.Fragment>
  );
}
