import React, { Fragment } from 'react';

import {
  Button,
} from 'styled';

const ToggleButton = Button.extend.attrs({
  style: ({ toggled }) => 
    toggled
      ? {
          background: 'white',
          borderBottomWidth: 0,
          color: '#555',
        }
      : null
})`
  width: 50px;
  height: 24px;
  line-height: 24px;
  padding: 0;
  margin-top: 76px;
  margin-left: 6px;
  background: #bbb;
  color: #555;

  :hover {
    background: #777;
    border-color: #777;
  }

  :active {
    background: #333;
    border-color: #333;
  }
`;

const FeedControl = props => {
  const { 
    onToggle,
    type,
  } = props;
  
  return (
    <Fragment>
      <ToggleButton
        onClick={onToggle}
        toggled={type === 'new'} >New</ToggleButton>

      <ToggleButton
        onClick={onToggle}
        toggled={type === 'top'} >Top</ToggleButton>
    </Fragment>
  );
};

export default FeedControl;