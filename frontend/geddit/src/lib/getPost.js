function getPost(id) {
  return (
    fetch(`http://localhost:3001/post?id=${id}`)
      .then(res => res.json())
      .catch(e => console.log(e))
  )
} 

export default getPost;