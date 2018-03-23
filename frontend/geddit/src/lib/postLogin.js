function postLogin(body) {
  return (
    fetch('http://localhost:3001/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  )
}

export default postLogin;