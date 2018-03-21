import styled from 'styled-components';
import BG from 'static/post-bg.jpg';

import {
  Button,
} from 'styled';

const PostBG = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100% - 24px);
  padding-top: 24px;
  background: url(${BG});
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const PostContainer = styled.div`
  background: white;
  max-width: 600px;
  margin: auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
`

const PostView = styled.div`
  position: relative;
  width: calc(100% - 24px);
  max-width: 600px;
  padding: 6px 12px;
  margin: auto;
`

const TitleLabel = styled.label`
  display: block;
  color: #333;
  font-size: 24px;
  width: calc(100% - 100px);
  height: 42px;
  line-height: 42px;
  margin: 6px 0;
  font-weight: normal;
`

const ContentP = styled.p`
  margin: 24px 0 0 36px;
  padding: 6px 12px;
  color: black;
  background: #ddd;
  font-size: 12px;
`

const DateLabel = styled.label`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 11px;
`

const TimeLabel = DateLabel.extend`
  top: 28px;
  font-size: 11px;  
`

const HandleLabel = DateLabel.extend`
  top: 44px;
  color: blue;
  font-size: 11px;
`

const VoteCount = styled.div.attrs({
  style: ({ votes }) => ({
    color: votes >= 0 ? 'darkblue' : 'darkred',
  })
})`
  display: inline-block;
  position: relative;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  margin: 0 6px;
  vertical-align: top;
`

const VoteButton = styled.i.attrs({
  className: 'material-icons',
})`
  display: inline-block;
  position: relative;
  border: 0;
  font-size: 14px;
  height: 30px;
  width: 30px;
  line-height: 30px;
  vertical-align: top;
  text-align: center;

  :hover {
    font-size: 18px;
    cursor: pointer;
  }
`

const Control = styled.div.attrs({
  style: ({ visibleCommentBox }) => ({
    height: visibleCommentBox ? 176 : 34,
  }),
})`
  position: relative;
  width: calc(100% - 60px);
  max-width: ;  
  margin: auto;
  margin-bottom: 24px;  
  padding: 6px 12px 6px 48px;
  transition: all 0.3s ease;
  overflow: hidden;
`

const ControlButton = Button.extend`
  float: right;
  margin-left: 12px;
  font-size: 11px;
`

const CommentView = styled.div`
  width: calc(100% - 32px);
  max-width: 600px;  
  margin: auto;
  padding-bottom: 60px;
  padding-top: 18px;
`

const CommentBox = styled.textarea`
  float: right;
  width: calc(100% - 14px);
  height: 62px;
  padding: 6px;
  margin-bottom: 12px;
  border-color: #bbb;
  color: #555;
  font-size: 12px;
  resize: none;
  outline: none;
`

export {
  PostBG,
  PostContainer,
  PostView,
  TitleLabel,
  ContentP,
  DateLabel,
  TimeLabel,
  HandleLabel,
  VoteCount,
  VoteButton,
  Control,
  ControlButton,
  CommentView,
  CommentBox,
}