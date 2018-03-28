import _ from 'lodash';

function parseTimestamp(timestamp) {
  const date = _.split(new Date(timestamp), ' ');
  const time = _.split(date[4], ':');

  return {
    date: `${date[1]} ${date[2]}, ${date[3]}`,
    time: `${parseInt(time[0], 10) % 12}:${time[1]}${time[0] >= 12 ? 'pm' : 'am'}`, 
  };
}

export default parseTimestamp;