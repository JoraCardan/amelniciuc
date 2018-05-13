import React from 'react';

import Icon from '../atoms/Icon';
import ProjectList from '../components/ProjectList';

const Home = () => (
  <div className="home">
    <section className="section section--viewport section--center section--negate-header">
      <h2 className="title">Hello there!</h2>
      <h2 className="title">
        I'm Alexandra Melniciuc &mdash;<br/>
        An Enthusiastic UI/UX Designer.
      </h2>

      <p className="home__content content">
        A big fan of playing with <Icon name="forms" color="white" size="auto" />, <Icon name="colors" size="auto" /> and <Icon size="auto" name="type" /> as a result interesting solutions are born, stalker of creative ideas and user feedback lover.
      </p>
    </section>
    <section className="section--viewport section--center">
      <ProjectList />
    </section>
  </div>
);

export default Home;
