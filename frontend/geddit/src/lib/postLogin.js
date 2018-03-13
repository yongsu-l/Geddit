function login(body) {
  return (
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .catch(e => console.log(e))
  )
}

export default login;