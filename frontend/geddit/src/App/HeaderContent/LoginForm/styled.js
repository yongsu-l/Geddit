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
  opacity: 0.96;
`

const CloseButton = Button.extend`
  float: right;
  margin: -16px 4px 0 0;
  border: 0;
`

export {
  LoginFormView,
  CloseButton,
}