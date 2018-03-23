function getPost(id) {
  return (
    fetch(`http://18.217.251.35:3001/post?id=${id}`)
      .then(res => res.json())
      .catch(e => console.log(e))
  )
} 

export default getPost;