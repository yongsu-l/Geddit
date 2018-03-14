import React, { Fragment } from 'react';
import _ from 'lodash';

import {
  Button,
} from 'styled';

const PageButton = Button.extend`
  position: relative;
  width: 30px;
  height: 30px;
  margin: 10px 0 0 10px;
  padding: 0;
  border: 0;
  -webkit-transition: none;
  -moz-transition: none;
  -o-transition: none;
  transition: none;
`

const SelectedPageButton = PageButton.extend`
  marginLeft: calc(50vw - 15px);
  color: white;
  background: #333;

  :hover {
    color: white;
    background: #333;
    cursor: default;
  }

  :active {
    color: white;
    background: #333;
    cursor: default;
  }

  :focus {
    color: white;
    background: #333;
    cursor: default;
  }
`

const NextButton = PageButton.extend`
  position: absolute;
  left: 320px;
  width: auto;
  padding: 0 6px;
`

const PageNavigation = props => {
  const {
    page,
    numPage,
    onGoToPage,
    onNextPage,
  } = props;

  const pageButtonProps = page => ({
    onClick: onGoToPage,
    key: page,
  })

  const nextButtonProps = {
    onClick: onNextPage,
  }

  const renderPageButtons = () => {
    const currentPage = parseInt(page, 10);
    var lowerBound = currentPage - 4;
    lowerBound = lowerBound >= 1 ? lowerBound : 1;
    
    var upperBound = lowerBound + 7;

    if (upperBound > numPage) {
      upperBound = numPage;
      lowerBound = upperBound - 7;
    }

    const pageIndices = _.range(lowerBound, upperBound+1);

    return _.map(pageIndices, page => 
      page === currentPage
        ? <SelectedPageButton key={page}>{page}</SelectedPageButton>
        : <PageButton { ...pageButtonProps(page) } >{page}</PageButton>
    )
  }

  return (
    <Fragment>
      { renderPageButtons() }
      <NextButton { ...nextButtonProps } >Next</NextButton>
    </Fragment>
  )
}

export default PageNavigation;