import styled from 'styled-components';
import headerBG from 'static/root-header-bg.jpg';

const FeedControlView = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: url(${headerBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 25%;
`

const FeedView = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100% - 150px);
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

const PageNavigationView = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 50px;
  text-align: left;
  background: #eee;
`


export {
  FeedControlView,
  FeedView,
  PostFormView,
  PageNavigationView,
}