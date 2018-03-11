import styled from 'styled-components';

const AppView = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  transition: width .33s ease, height .33s ease;
`

const HeaderView = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 50px;
  vertical-align: middle;
`

const BodyView = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  text-align: left;
`

export {
  AppView,
  HeaderView,
  BodyView,
}