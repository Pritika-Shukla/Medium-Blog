import BlogCard from "../components/BlogCard"
import Navbar from "../components/Navbar"
import useBlogs from "../hooks"

const Blog = () => {

  const{loading, blogs}=useBlogs();
  if(loading){
    return <p>Loading...</p>
  }
  return (
    <div>
<Navbar/>

  
    <div className="flex justify-center w-3/5 mx-auto h-screen flex-col items-center">
   {blogs.map(blog => <BlogCard
 author={blog.author.username || "Anonymous"}
 title={blog.title}
 content={blog.content}
     publishDate="2nd December 2016"
     />)}

{/* <BlogCard
     author={"Pritika Shukla"}
     title={"The resume that got a software engineer a $300,000 job at Google. Yes, I do have those experiences on my resume. But before Microsoft, I just"}
     content={"This is my first blog. I'm excited to write about my journey  This is my first blog. I'm excited to write about my journey and share my experiences with you. Over the years, I've embarked on various adventures that have shaped who I am today. From traveling to new countries to tackling personal challenges, each step has been a learning opportunity. I aim to document these moments, offering insights and reflections along the way. Whether it's exploring different cultures, pursuing new hobbies, or overcoming obstacles, I hope to inspire and connect with like-minded individuals. Alongside my stories, I'll share tips and advice that I've found helpful on my path. I'm passionate about growth, both personal and professional, and believe that sharing our stories can lead to meaningful conversations. Your feedback and engagement will be invaluable as I navigate this blogging journey. Thank you for joining me, and I look forward to the adventures ahead!"}
     publishDate="2nd December 2016"
     /><BlogCard
     author={"Pritika Shukla"}
     title={"The resume that got a software engineer a $300,000 job at Google. Yes, I do have those experiences on my resume. But before Microsoft, I just"}
     content={"This is my first blog. I'm excited to write about my journey  This is my first blog. I'm excited to write about my journey and share my experiences with you. Over the years, I've embarked on various adventures that have shaped who I am today. From traveling to new countries to tackling personal challenges, each step has been a learning opportunity. I aim to document these moments, offering insights and reflections along the way. Whether it's exploring different cultures, pursuing new hobbies, or overcoming obstacles, I hope to inspire and connect with like-minded individuals. Alongside my stories, I'll share tips and advice that I've found helpful on my path. I'm passionate about growth, both personal and professional, and believe that sharing our stories can lead to meaningful conversations. Your feedback and engagement will be invaluable as I navigate this blogging journey. Thank you for joining me, and I look forward to the adventures ahead!"}
     publishDate="2nd December 2016"
     />
     <BlogCard
     author={"Pritika Shukla"}
     title={"The resume that got a software engineer a $300,000 job at Google. Yes, I do have those experiences on my resume. But before Microsoft, I just"}
     content={"This is my first blog. I'm excited to write about my journey  This is my first blog. I'm excited to write about my journey and share my experiences with you. Over the years, I've embarked on various adventures that have shaped who I am today. From traveling to new countries to tackling personal challenges, each step has been a learning opportunity. I aim to document these moments, offering insights and reflections along the way. Whether it's exploring different cultures, pursuing new hobbies, or overcoming obstacles, I hope to inspire and connect with like-minded individuals. Alongside my stories, I'll share tips and advice that I've found helpful on my path. I'm passionate about growth, both personal and professional, and believe that sharing our stories can lead to meaningful conversations. Your feedback and engagement will be invaluable as I navigate this blogging journey. Thank you for joining me, and I look forward to the adventures ahead!"}
     publishDate="2nd December 2016"
     /> */}
    
    </div>
    </div>

  )
}

export default Blog
