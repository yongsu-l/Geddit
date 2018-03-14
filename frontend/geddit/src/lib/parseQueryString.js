import _ from 'lodash/fp';

const parseQueryString = _.flow(
  _.replace('?', ''),
  _.split('&'),
  _.map(_.split('=')),
  _.fromPairs,
)

export default parseQueryString;