import {
  Label,
  Button,
} from 'styled';

const LogoLabel = Label.extend`
  line-height: 50px;
  background: #f7f7f7;
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

const MenuButton = Button.extend`
  float: right;
  width: 50px;
  height: 50px;
  line-height: 50px;
  padding: 0;
  font-size: 28px;
  font-weight: 100;
  border: 0;
  color: #E65100;

  :focus {
    color: #E65100;
  }
`

export {
  LogoLabel,
  ControlButton,
  MenuButton,
  FloatRightLabel,
  UsernameLabel,
}