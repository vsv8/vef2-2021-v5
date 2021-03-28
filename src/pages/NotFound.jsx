import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <React.Fragment>
      <Helmet title="404 Villa"/>
      <h4>Síða fannst ekki</h4>
    </React.Fragment>
  );
}
