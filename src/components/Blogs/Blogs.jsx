import { useEffect, useState } from "react";
import Blog from '../Blog/Blog';
const Blogs = () => {
    const [blogs,setblogs] = useState([]);

    useEffect(()=>{
        fetch('info.json')
        .then(response=>response.json())
        .then(data => setblogs(data))
    },[])
  return (
    <>
        <div className="w-full md:w-2/3 lg:w-3/4 mb-10">
        {
            blogs.map(blog =><Blog key={blog.id} blog={blog}></Blog>)
        }
        </div>
    </>
  );
};
export default Blogs;
