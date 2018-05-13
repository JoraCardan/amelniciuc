import React from 'react';

const Project = ({ match }) => (
  <div>
    <h3>{match.params.projectId}</h3>
  </div>
);

export default Project;
