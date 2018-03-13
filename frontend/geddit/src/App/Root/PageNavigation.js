import React, { Fragment } from 'react';
import _ from 'lodash';

import {
  Button,
} from 'styled';

const PageButton = Button.extend`
  width: 30px;
  height: 30px;
  margin: 10px 0 0 10px;
  padding: 0;
  border: 0;
`

const SelectedPageButton = PageButton.extend`
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

  const pageButtonProps = (page) => ({
    onClick: onGoToPage,
    key: page,
  })

  const nextButtonProps = {
    onClick: onNextPage,
  }

  const renderPageButtons = () => {
    const currentPage = parseInt(page, 10);
    var lowerBound = currentPage - 5;
    var upperBound = currentPage + 4;

    lowerBound = lowerBound >= 1 ? lowerBound : 1;
    upperBound = upperBound <= numPage ? upperBound : numPage;

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