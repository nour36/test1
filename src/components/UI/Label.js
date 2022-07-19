import React from 'react';
import LabelModel from './Label.css';

const Label = (props) => {
  const classes = 'label ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Label;