import _ from 'lodash';

function parseTimestamp(timestamp) {
  const date = _.split(Date(timestamp), ' ');
  const time = _.split(date[4], ':');

  return {
    date: `${date[1]} ${date[2]}, ${date[3]}`,
    time: `${time[0]}:${time[1]}`, 
  }
}

export default parseTimestamp;