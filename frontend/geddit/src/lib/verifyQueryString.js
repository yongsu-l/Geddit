import _ from 'lodash/fp';

const verifyQueryString = _.flow(
  _.replace('?', ''),
  _.split('&'),
  _.map(x => _.split('=')(x).length === 2),
  _.reduce((x, y) => x && y)(true),
)

export default verifyQueryString;