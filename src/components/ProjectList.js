import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Icon from '../atoms/Icon';
import { formatNumber } from '../helpers';

const PROJECTS = [
  {
    id: 1,
    image: '',
    title: 'Tap Battle',
    type: 'Mobile Game',
    url: '/portfolio/tap-battle',
  },
  {
    id: 2,
    image: '',
    title: 'Tradesquare',
    type: 'Mobile App & Website',
    url: '/portfolio/tradesquare',
  },
  {
    id: 3,
    image: '',
    title: 'Tradesquare',
    type: 'Mobile App & Website',
    url: '/portfolio/tradesquare',
  },
  {
    id: 4,
    image: '',
    title: 'Tradesquare',
    type: 'Mobile App & Website',
    url: '/portfolio/tradesquare',
  },
  {
    id: 5,
    image: '',
    title: 'Tap Battle',
    type: 'Mobile Game',
    url: '/portfolio/tap-battle',
  },
];

const ProjectItem = props => (
  <div className="proj__item">
    <Link className="proj__link" to={props.url}></Link>
    <div className="proj__img"></div>
    <div className="proj__info">
      <div className="proj__count">{formatNumber(props.index)}.</div>
      <div className="proj__main-info">
        <p className="proj__type">{props.type}</p>
        <h2 className="proj__title">{props.title} <Icon name="arrow_down" color="current" /></h2>
      </div>
    </div>
  </div>
);

class ProjectList extends Component {
  state = {
    projects: PROJECTS,
  }

  addProjects = () => {
    const projects = this.state.projects.concat();

    for (let i = 0; i < 5; i++) {
      projects.push({
        id: (projects.length + Math.random() * 100),
        image: '',
        title: 'Tap Battle',
        type: 'Mobile Game',
        url: '/portfolio/tap-battle',
      });
    }

    return projects;
  }

  loadNext = () => {
    console.log('called');
    const prjs = this.addProjects();
    console.log(prjs);

    this.setState({
      projects: prjs,
    })
  }

  render() {
    return (
      <div className="proj">
        <TransitionGroup>
          <CSSTransition
            key="0.5"
            classNames="slide"
            timeout={400}
          >
            <div className="proj__item proj__item--first">
              <h2 className="proj__sect-title">Projects</h2>
            </div>
          </CSSTransition>

          {this.state.projects.map((item, index) => (
            <CSSTransition
              key={item.id}
              classNames="slide"
              timeout={400}
            >
              <ProjectItem index={index + 1} {...item} />
            </CSSTransition>
          ))}
          <CSSTransition
            key="0.6"
            classNames="slide"
            timeout={400}
          >
            <div className="proj__item proj__item--last" onClick={this.loadNext}>
              <button type="button" className="btn">Show more works <span className="btn__icon">+</span></button>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

export default ProjectList;
