import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 0px 12px;
  text-align: center;
  background: white;
  color: #333;
`

const Button = styled.button`
  display: inline-block;
  position: relative;
  padding: 6px;
  color: #333;
  background: white;
  border: 1px solid #bbb;
  outline: none;

  :hover {
    background: #bbb;
    cursor: pointer;
  }
  
  :focus {
    border-color: black;
    color: black;
  }
  
  :active {
    color: white;
    background: #555;
  }
`

const Form = styled.form`
  border: 1px solid #bbb;
  background: white;
  padding: 20px 0;
  overflow: hidden;
  -webkit-animation: fade-in .35s ease-out;
  -moz-animation: fade-in .35s ease-out;
  -o-animation: fade-in .35s ease-out;
  animation: fade-in .35s ease-out;
`

const FormField = styled.div`
  padding: 20px 20px 0 20px;
  width: calc(100% - 40px);
`

const FormFieldLabel = Label.extend`
  font-size: 12px;
  padding: 0;
`

const FormFieldInput = styled.input`
  width: calc(100% - 10px);
  height: 18px;
  padding: 4px;
  border: 1px solid #bbb;
`

const FormButton = Button.extend`
  float: right;
`

export {
  Label,
  Button,
  Form,
  FormField,
  FormFieldLabel,
  FormFieldInput,
  FormButton,
}