function createPost(body) {
  return (
    fetch('/user/post/create', {
      method: 'PUT',
      header: {
        'Authorization': 'JWT token',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  )
}

export default createPost;