function getPost(id) {
  return (
    fetch(`/post?id=${id}`)
      .then(res => res.json())
      .catch(e => console.log(e))
  )
} 

export default getPost;