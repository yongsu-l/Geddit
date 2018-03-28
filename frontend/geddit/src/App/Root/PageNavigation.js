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
`;

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
`;

const NextButton = PageButton.extend`
  width: auto;
  padding: 0 6px;
`;

const PageNavigation = props => {
  const {
    page,
    numPage,
    onGoToPage,
    onNextPage,
  } = props;

  const renderPageButtons = () => {
    const currentPage = parseInt(page, 10);
    var lowerBound = currentPage - 4;
    lowerBound = lowerBound >= 1 ? lowerBound : 1;
    
    var upperBound = lowerBound + 7;

    if (upperBound > numPage) {
      upperBound = numPage;
      lowerBound = upperBound - 7;
    }
    lowerBound = lowerBound >= 1 ? lowerBound : 1;    

    const pageIndices = _.range(lowerBound, upperBound+1);

    return _.map(pageIndices, page => 
      page === currentPage
        ? <SelectedPageButton 
            key={page}>{page}</SelectedPageButton>
        : <PageButton
            onClick={onGoToPage}
            key={page} >{ page }</PageButton>
    );
  };

  return (
    <Fragment>
      { renderPageButtons() }
      <NextButton
        onClick={onNextPage} >Next</NextButton>
    </Fragment>
  );
};

export default PageNavigation;
