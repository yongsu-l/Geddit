import styled from 'styled-components';

const AppView = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const HeaderView = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #bbb;
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