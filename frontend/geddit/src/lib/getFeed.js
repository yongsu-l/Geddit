import constructQueryString from './constructQueryString';

function getFeed(params) {
  return (
    fetch(`/feed?${constructQueryString(params)}`)
      .then(res => res.json())
      .catch(e => console.log(e))
  );
}

export default getFeed;