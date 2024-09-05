import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blog{
  "content":string;
  "title":string;
  "id":number;
  "author":{
    "username":string
  }
}
const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]); 
  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
      headers: {
        Authorization: localStorage.getItem("jwt") || '', 
      }
    })
      .then(response => {
        setBlogs(response.data.blogs);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []); 

  return { loading, blogs };
};

export default useBlogs;
