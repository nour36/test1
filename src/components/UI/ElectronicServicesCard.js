import React from 'react';

import './ElectronicServicesCard.css';

const ElectronicServicesCard = (props) => {
  const classes = 'elcCard ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default ElectronicServicesCard;