import styled from 'styled-components';

const CommentWrapper = styled.div.attrs({
  style: ({ colorId }) => ({
    background: colorId % 2 ? '#fff' : '#f3f3f3',
  })
})`
  position: relative;
  width: calc(100% - 38px);
  padding: 6px 12px;
  margin: 6px;
  margin-left: 20px;
  font-size: 13px;
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

export {
  CommentWrapper,
  CommentCount,
}