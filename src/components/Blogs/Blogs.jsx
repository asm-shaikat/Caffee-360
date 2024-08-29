import { useEffect, useState } from "react";
import Blog from '../Blog/Blog';
import PropTypes from "prop-types";

const Blogs = ({handleBookmark,handleMarkasRead}) => {
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
            blogs.map(blog =><Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleMarkasRead={handleMarkasRead}></Blog>)
        }
        </div>
    </>
  );
};
Blog.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
}
export default Blogs;
