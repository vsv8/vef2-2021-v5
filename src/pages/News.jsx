import React from 'react';
import { useParams } from 'react-router-dom';

import { News } from '../components/news/News';

export function NewsPage() {
  // TODO útfæra fréttasíðu
  const id = useParams().id;
  console.log(id);

  return (
    <React.Fragment>
      <News category={id}/>
    </React.Fragment>
  );
}