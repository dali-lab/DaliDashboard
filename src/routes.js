import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Header from './components/site_header';
import Members from './pages/members_page';
import Projects from './pages/projects_page';
import Member from './pages/member_page';
import Project from './pages/project_page';

export default(
  <Route path="/" component={Header}>
    <IndexRoute component={App} />
    <Route path="members/:id" component={Member} />
    <Route path="members" component={Members} />
    <Route path="projects/:id" component={Project} />
    <Route path="projects" component={Projects} />
  </Route>
);
