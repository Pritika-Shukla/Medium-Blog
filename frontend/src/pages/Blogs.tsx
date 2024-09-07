import React from 'react'
import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom';
import FullBlog from '../components/FullBlog';
import Navbar from '../components/Navbar';
const  Blogs = () => {
  const { id }=useParams();
  const {loading,blog}=useBlog({
    id: id || " " 
  });
  if(loading){
    return <p>Loading...</p>
  }
  return (
    <div>
      <Navbar/>
   <FullBlog blog={blog}/>
 
    </div>
  )
}

export default Blogs
