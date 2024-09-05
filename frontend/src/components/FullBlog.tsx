import Navbar from "./Navbar";
import { Blog } from "../hooks";
const FullBlog = ({blog} :{blog:Blog}) => {
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-12 px-10 w-screen">
        <div className="col-span-9 mt-10 px-10">
          <p className="text-4xl font-bold leading-1">
            {blog.title}
          </p>
          <p className="font-medium text-base pt-4 text-gray-500">Posted on  August 24, 2023</p>
          <div className="text-lg text-gray-700 leading-normal mt-6">
            {blog.content}
        </div>
        <div className="col-span-3">
            <p>
                Author 
            </p>
            <p></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FullBlog;
