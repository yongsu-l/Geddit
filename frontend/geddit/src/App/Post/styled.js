import styled from 'styled-components';

import {
  Button,
} from 'styled';

const PostView = styled.div`
  position: relative;
  width: calc(100% - 48px);
  padding: 6px 12px 12px 12px;
  margin: 24px 12px 0 12px;
  background: #f3f3f3;
`

const TitleLabel = styled.label`
  display: block;
  color: #111;
  font-size: 36px;
  margin: 6px 0;
`

const ContentP = styled.p`
  margin-left: 36px;
  padding: 6px 12px;
  color: #555;
  background: #e3e3e3;
  font-size: 12px;
  font-family: monospace;
`

const DateLabel = styled.label`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 12px;
`

const TimeLabel = DateLabel.extend`
  top: 28px;
`

const HandleLabel = DateLabel.extend`
  top: 44px;
  color: blue;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Control = styled.div.attrs({
  style: ({ visibleCommentBox }) => ({
    height: visibleCommentBox ? 136 : 30
  }),
})`
  position: relative;
  width: calc(100% - 84px);
  margin: 0 12px;
  padding: 0 12px 12px 48px;
  background: #f3f3f3;
  transition: all 0.3s ease;
  overflow: hidden;
`

const ControlButton = Button.extend`
  float: right;
  margin-left: 12px;
`

const CommentView = styled.div`
  width: calc(100% - 36px);
  background: white;
  margin-left: 24px;
`

const CommentBox = styled.textarea`
  float: right;
  width: calc(100% - 14px);
  height: 62px;
  padding: 6px;
  margin-bottom: 12px;
  border-color: #f3f3f3;
  color: #555;
  font-size: 12px;
  resize: none;
  outline: none;
`

export {
  PostView,
  TitleLabel,
  ContentP,
  DateLabel,
  TimeLabel,
  HandleLabel,
  Control,
  ControlButton,
  CommentView,
  CommentBox,
}