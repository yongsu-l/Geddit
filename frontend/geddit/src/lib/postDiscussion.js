function postDiscussion(token, body) {
  return (
    fetch('/user/post/create', {
      method: 'POST',
      headers: {
        'x-access-token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  );
}

export default postDiscussion;