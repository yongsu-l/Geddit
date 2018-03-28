function postDiscussion(token, body) {
  return (
    fetch('http://18.217.251.35:3001/user/post/create', {
      method: 'POST',
      headers: {
        'x-access-token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  )
}

export default postDiscussion;