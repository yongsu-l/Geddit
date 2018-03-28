import styled from 'styled-components';

const CommentContainer = styled.div`
  position: relative;
  width: calc(100% - 16px);
  margin: 12px 0 0 16px;
`;

const CommentWrapper = styled.div`
  color: #555;
  font-size: 12px;
  padding: 8px 0px 8px 12px;  
  background: white;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const CommentP = styled.p`
  margin: 0;
  color: black;
`;

const CountWrapper = styled.div`
  height: 14px;
  margin-top: 6px;
`;

const CommentCount = styled.label`
  display: inline-block;
  float: right;
  margin-right: 24px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ReplyLabel = styled.label`
  display: inline-block;
  color: #555;
  margin-left: 24px;
  font-size: 11px;
  
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`; 

const DateLabel = styled.label`
  position: absolute;
  top: 11px;
  right: 12px;
  font-size: 11px;
`;

const HandleLabel = styled.label`
  display: inline-block;
  position: relative;
  color: blue;
  font-size: 11px;
  text-align: right;
  float: right;
  margin-right: 12px;
`;

const ReplyContainer = styled.div.attrs({
  style: ({ visible }) => ({
    height: visible ? 96 : 0,
    marginTop: visible ? 6 : 0,
  })
})`
  position: relative;
  margin-left: 36px;
  width: calc(100% - 72px);
  overflow: hidden;
  
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
`;
  
const ReplyBox = styled.textarea`
  background: white;
  resize: none;
  width: calc(100% - 24px);
  height: 36px;
  padding: 6px 12px;
  border: 0;
  outline: none;
  font-weight: 100;
  font-size: 12px;
  font-family: san-serif;
`;

const ReplyButton = styled.button`
  display: inline-block;
  width: calc(100% - 76px);
  background: #777;
  color: white;
  border: 0;
  border-bottom-right-radius: 8px;
  height: 24px;
  line-height: 24px;
  font-weight: 400;
  padding: 0;
  margin-left: 4px;
  outline: none;

  :hover {
    background: #888;
  }

  :active {
    background: #333;
  }
`;

const CancelButton = ReplyButton.extend`
  color: red;
  width: 72px;
  border-radius: 0;
  border-bottom-left-radius: 8px;  
  margin: 0;
`;

export {
  CommentContainer,
  CommentWrapper,
  CommentP,
  CountWrapper,
  CommentCount,
  ReplyLabel,
  DateLabel,
  HandleLabel,
  ReplyContainer,
  ReplyBox,
  ReplyButton,
  CancelButton,
};