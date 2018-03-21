function putUpvote({ token, postID, upvote }) {
  return (
    fetch('/post/vote', {
      method: 'PUT',
      headers: {
        'x-access-token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postID,
        upvote,
      })
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  )
}

export default putUpvote;