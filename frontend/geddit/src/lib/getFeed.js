import constructQueryString from './constructQueryString';

function getFeed(params) {
  return (
    fetch(`http://localhost:3001/feed?${constructQueryString(params)}`)
      .then(res => res.json())
      .catch(e => console.log(e))
  )
}

export default getFeed;