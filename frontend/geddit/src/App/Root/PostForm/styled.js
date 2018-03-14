import styled from 'styled-components';

import {
  Button,
  Form,
} from 'styled';

const PostFormView = styled.div.attrs({
  style: ({ collapsed }) => ({
    width: collapsed ? 'calc(70% - 16px)' : 'calc(94% - 16px)',
    height: collapsed ? 32 : 'calc(50vh + 112px)',
    marginLeft: collapsed ? 'calc(12% + 8px)' : 8,
  })
})`
  position: relative;
  margin-top: 12px;
  border: 1px solid #bbb;
  overflow: hidden;
  -webkit-transition:
    width .75s ease,
    height .75s ease,
    margin-left .75s ease;
  -moz-transition:
    width .75s ease,
    height .75s ease,
    margin-left .75s ease;
  -o-transition:
    width .75s ease,
    height .75s ease,
    margin-left .75s ease;
  transition:
    width .75s ease,
    height .75s ease,
    margin-left .75s ease;

`

const PostButton = Button.extend`
  font-family: sans-serif;
  font-size: 14px;
  position: relative;
  width: 100%;
  height: 32px;
  border: 0;
`

const DiscussionForm = Form.extend`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
`

const FormTitle = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  line-height: 32px;
  color: #333;
  font-size: 14px;
  border-bottom: 1px solid #bbb;
`

const TitleInput = styled.input`
  width: calc(100% - 12px);
  height: 24px;
  line-height: 24px;
  border: 0;
  border-bottom: 1px solid #bbb;
  color: black;
  padding: 6px;
  font-size: 12px;
  outline: none;
`

const ContentTextArea = styled.textarea`
  width: calc(100% - 12px);
  height: 50vh;
  border: 0;
  border-bottom: 1px solid #bbb;
  color: black;
  padding: 6px;
  font-size: 12px;
  font-weight: 100;
  font-family: san-serif;
  outline: none;
  resize: none;
`

const SubmitPostButton = Button.extend`
  float: right;
  width: 70%;
  height: 32px;
  margin-top: -4px;
  border: 0;
  border-left: 1px solid #bbb;
`

const CancelButton = SubmitPostButton.extend`
  width: 30%;
  border: 0;
  color: red;
`

export {
  PostFormView,
  PostButton,
  DiscussionForm,
  FormTitle,
  TitleInput,
  ContentTextArea,
  SubmitPostButton,
  CancelButton,
}