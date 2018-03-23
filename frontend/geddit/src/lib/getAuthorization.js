function getAuthorization(token) {
  return (
    fetch('http://18.217.251.35:3001/user/authorize', {
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