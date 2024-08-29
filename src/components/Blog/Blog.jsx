import React from "react";
import { BsBookmarkPlus } from "react-icons/bs";
import PropTypes from "prop-types";

const Blog = ({ blog,handleBookmark,handleMarkasRead}) => {
  if (!blog) {
    return null; // or a fallback UI
  }
  const { id,blog_image, avatar_img, blog_title, date, description, name, tags, time } = blog;

  return (
    <div>
      <img
        src={blog_image}
        alt="Blog Thumbnail"
        className="w-full h-auto rounded-lg"
      />
      <div className="flex gap-4 mt-6">
        <img
          alt="Author Avatar"
          src={avatar_img}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex justify-between w-full items-center">
          <div>
            <p className="font-semibold">{`${name.first_name} ${name.last_name}`}</p>
            <small className="text-gray-500">{date}</small>
          </div>
          <div className="flex gap-1">
            <div>
              <p className="text-sm text-gray-500">{`${time} min read`}</p>
            </div>
            <div>
              <BsBookmarkPlus style={{ fontSize: "2rem" }} onClick={() => handleBookmark(blog)} />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xl font-semibold">
        {blog_title}
      </p>
      <p className="mt-2">{description}</p>
      <div className="flex gap-2 mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-blue-500">{`#${tag}`}</span>
        ))}
      </div>
      <p className="inline-block mt-4 text-blue-600 hover:underline"
       onClick={()=>handleMarkasRead(id,time)}>
      Mark as read
    </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    blog_image: PropTypes.string.isRequired,
    avatar_img: PropTypes.string.isRequired,
    blog_title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
  handleBookmark: PropTypes.func.isRequired,
};

export default Blog;
