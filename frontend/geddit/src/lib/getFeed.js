import constructQueryString from './constructQueryString';

function getFeed(params) {
  return (
    fetch(`http://18.217.251.35:3001/feed?${constructQueryString(params)}`)
      .then(res => res.json())
      .catch(e => console.log(e))
  )
}

export default getFeed;