import {
  Form,
  Button,
} from 'styled';

const LoginFormView = Form.extend`
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

export {
  LoginFormView,
  CloseButton,
}