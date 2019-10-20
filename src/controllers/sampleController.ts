import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import html from '../views/pages/sample/html';
import Counter from '../views/components/counter/counter';

export default (req: express.Request, res: express.Response) => {
  const counter = renderToString(React.createElement(Counter));

  res.send(html({
    counter,
  }));
}
