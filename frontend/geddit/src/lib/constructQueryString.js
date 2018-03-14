import _ from 'lodash/fp';

const objToQueryString = _.flow(
  _.toPairs,
  _.map(([key, val]) => `${key}=${val}`),
  _.join('&'),
)

export default objToQueryString;