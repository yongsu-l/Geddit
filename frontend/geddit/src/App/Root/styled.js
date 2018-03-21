import styled from 'styled-components';
import headerBG from 'static/root-header-bg.jpg';

import {
  Form,
  Label,
  Button,
} from 'styled';

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

const PostWrapper = styled.div`
  display: inline-block;
  width: calc(100% - 268px);
  margin: 12px 6px;
  padding: 6px;
  border: 1px solid #bbb;
  `
  
const PostTitle = Label.extend`
  display: inline-block;
  padding: 0;
  color: blue;
  font-size: 12px;
  text-align: left;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const PostButton = Button.extend`
  font-family: sans-serif;
  font-size: 14px;
  position: relative;
  width: 100%;
  height: 100%;
  border: 0;
`

const PostFormView = styled.div.attrs({
  style: ({ collapsedForm }) => ({
    width: collapsedForm ? 210 : 520,
    height: collapsedForm ? 31 : 'calc(50vh + 115px)',
    right: collapsedForm ? 20 : 'calc(50vw - 261px)',
  })
})`
  z-index: 100;
  position: absolute;
  top: 112px;
  border: 1px solid #bbb;
  overflow: hidden;
  -webkit-transition:
    width .75s ease,
    height .75s ease,
    right .75s ease;
  -moz-transition:
    width .75s ease,
    height .75s ease,
    right .75s ease;
  -o-transition:
    width .75s ease,
    height .75s ease,
    right .75s ease;
  transition:
    width .75s ease,
    height .75s ease,
    right .75s ease;
`

const PageNavigationView = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 50px;
  text-align: left;
  background: #eee;
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
  color: white;
  background: #666;
  font-size: 14px;
  font-weight: 200;
  text-align: center;
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
  FeedControlView,
  FeedView,
  PostWrapper,
  PostTitle,
  PostButton,
  PostFormView,
  PageNavigationView,
  DiscussionForm,
  FormTitle,
  TitleInput,
  ContentTextArea,
  SubmitPostButton,
  CancelButton,
}