import React, { Fragment } from 'react';

function Placeholder(props) {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      {props.children}
    </Fragment>
  );
}

export default Placeholder;
