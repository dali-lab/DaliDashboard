import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Header from './components/site_header';
import Members from './components/members_page';

export default(
  <Route path="/" component={Header}>
    <IndexRoute component={App} />
    <Route path="members" component={Members} />
  </Route>
);
