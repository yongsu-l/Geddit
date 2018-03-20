import styled from 'styled-components';

const CommentWrapper = styled.div.attrs({
  style: ({ colorId }) => ({
    background: colorId % 2 ? '#fff' : '#f3f3f3',
  })
})`
  position: relative;
  width: calc(100% - 24px);
  padding: 8px 0px 8px 12px;
  margin: 20px 0px 4px 12px;
  color: #555;
  font-size: 13px;
`

const CommentP = styled.p`
  margin: 0;
  color: #555;
  font-family: monospace;
`

const CountWrapper = styled.div`
  height: 14px;
  margin-top: 6px;
  margin-right: 12px;
`

const CommentCount = styled.label`
  display: block;
  float: right;
  clear: both;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const HandleLabel = styled.label`
  position: absolute;
  top: 6px;
  right: 12px;
  color: blue;
  font-size: 12px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export {
  CommentWrapper,
  CommentP,
  CountWrapper,
  CommentCount,
  HandleLabel,
}