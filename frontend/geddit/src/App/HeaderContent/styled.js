import styled from 'styled-components';

import {
  Label,
  Button,
  Form,
  Loader,
} from 'styled';

const LogoLabel = Label.extend`
  line-height: 50px;
  background: #f7f7f7;

  :hover {
    cursor: pointer;
  }
`

const ControlButton = Button.extend`
  float: right;
  margin: 10px 10px 10px 0;
  background: #f7f7f7;  
`

const FloatRightLabel = LogoLabel.extend`
  float: right;
  font-size: 14px;
`

const UsernameLabel = FloatRightLabel.extend`
  font-size: 12px;
  color: #E65100;
`

const LogoutLabel = FloatRightLabel.extend`
  font-size: 12px;
  color: #E65100;

  :hover {
    color: #333;
  }

  :active {
    color: #E65100;
  }
`

const LoginFormView = Form.extend`
  z-index: 100;
  position: absolute;
  top: 50px;
  right: 10px;
  width: 264px;
  background: white;
  border-top: 0;
`


const SignupFormView = Form.extend`
  z-index: 100;
  position: absolute;
  top: 50px;
  right: 10px;
  width: 264px;
  background: white;
  border-top: 0;
`

const CloseButton = Button.extend`
  float: right;
  margin: -16px 4px 0 0;
  border: 0;

  :hover {
    background: transparent;
    font-weight: 400;
  }
`

const LoaderWrapper = styled.div`
  position: absolute;
  right: 32px;
  bottom: 22px;
  width: 30px;
  height: 30px;
`

const InvertedLoader = Loader.extend`
  filter: invert(100%);
`

export {
  LogoLabel,
  ControlButton,
  LogoutLabel,
  FloatRightLabel,
  UsernameLabel,
  LoginFormView,
  SignupFormView,
  CloseButton,
  LoaderWrapper,
  InvertedLoader,
}