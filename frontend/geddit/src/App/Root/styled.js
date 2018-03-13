import styled from 'styled-components';
import headerBG from 'static/root-header-bg.jpg';

import {
  Button,
} from 'styled';

const FeedControl = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: url(${headerBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 25%;
`

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
`

const FeedView = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100% - 100px);
  background: white;
  overflow-y: auto;
  overflow-x: hidden;
`

const PostFormView = styled.div`
  display: inline-block;
  position: absolute;
  top: 100px;
  right: 0;
  width: 40%;
  background: transparent;
  text-align: center;
`


export {
  FeedControl,
  ToggleButton,
  FeedView,
  PostFormView,
}