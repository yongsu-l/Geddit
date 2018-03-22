function postComment({ token, postID, parentID=null, content }) {
  return (
    fetch('/post/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({
        postID,
        parentID,
        content,
      })
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  )
}

export default postComment;