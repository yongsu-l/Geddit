function getAuthorization(token) {
  return (
    fetch('/user/authorize', {
      method: 'GET',
      headers: {
        'x-access-token': token,
      }
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  )
}

export default getAuthorization;