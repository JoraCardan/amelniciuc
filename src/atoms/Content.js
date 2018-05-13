import React from 'react';

const Content = props => {
  const { title, desc } = props;
  return (
    <div className="content">
      { title && <h2 className="content__title">{title}</h2> }
      { desc && <p className="content__desc">{desc}</p> }
    </div>
  )
}
