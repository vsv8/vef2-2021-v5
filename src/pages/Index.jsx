import React from 'react';

import { NewsList } from "../components/news-list/NewsList";

export function Index() {
  // TODO útfæra yfirlitssíðu
  return (
    <React.Fragment>
      <h1>RÚV Fréttir</h1>
      <NewsList />
    </React.Fragment>
  );
}
