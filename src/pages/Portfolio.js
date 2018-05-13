import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Project from './Project';

const Portfolio = ({ match }) => {
  return (
    <React.Fragment>
      <Route path={`${match.url}/:projectId`} component={Project} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a Project.</h3>}
      />
    </React.Fragment>
  );
};

export default Portfolio;
