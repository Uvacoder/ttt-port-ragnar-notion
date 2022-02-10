import { getAllPostsHelper } from "../../utils/getAllPostsHelper"


const getAllPosts = async (req, res) => {
  const posts = await getAllPostsHelper()

  const dateArr = [...new Set(posts.map((post) => (post.createdOn)))]
  
  const data = dateArr.map((date) => {
    const postsOnDate = []
    posts.map((post) => {
      if(post.createdOn == date)
      postsOnDate.push(post)
    })
    
    let retData = {}
    retData[date] = postsOnDate
    return retData
  })
  
  // console.log(data)

  res.status(200).json(data)
}

export default getAllPosts;