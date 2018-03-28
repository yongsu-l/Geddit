import styled from 'styled-components';
import bg from 'static/bg.jpg';

const AppView = styled.div`
  width: 100vw;
  min-width: 400px;
  height: 100vh;
  min-height: 400px;  
  position: relative;
  overflow: hidden;
  transition: width .33s ease, height .33s ease;  
`;

const HeaderView = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 50px;
  vertical-align: middle;
  background: #f7f7f7;
`;

const BodyView = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  background: #eee;
  text-align: left;
  overflow-y: auto;
`;

const Mask = styled.div`
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  -webkit-animation: fade-in .3s ease;
  -moz-animation: fade-in .3s ease;
  -o-animation: fade-in .3s ease;
  animation: fade-in .3s ease;
`;

const LoadingView = styled.div`
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${bg});
  background-color: #1a1a1a;
  background-size: auto auto;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-animation: none;
  -moz-animation: none;
  -o-animation: none;
  animation: none;
`;

const LoaderWrapper = styled.div`
  position: absolute;
  top: calc(50% + 30px);
  left: calc(50% - 15px);
  width: 30px;
  height: 30px;
`;

export {
  AppView,
  HeaderView,
  BodyView,
  Mask,
  LoadingView,
  LoaderWrapper,
};