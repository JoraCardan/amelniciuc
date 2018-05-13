import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
];

const ProjectItem = props => (
  <Link className="proj__link" to={props.url}>
    <div className="proj__item">
      <div className="proj__img"></div>
      <div className="proj__info">
        <p className="content">{formatNumber(props.index)}.</p>
        <div className="proj__main-info">
          <p className="proj__type">{props.type}</p>
          <h2 className="proj__title">{props.title}</h2>
        </div>
        <div className="proj__hover">Case Study <Icon name="arrow_down" color="current" /></div>
      </div>
    </div>
  </Link>
);

class ProjectList extends Component {
  render() {
    return (
      <div className="proj">
        {PROJECTS.map((item, index) => <ProjectItem key={item.id} index={index + 1} {...item} />)}
      </div>
    )
  }
}

export default ProjectList;
