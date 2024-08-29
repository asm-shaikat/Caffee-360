import React from 'react';

const Bookmark = ({bookmark}) => {
    const {blog_title } = bookmark;
    console.log(blog_title );
    return (
        <div className='bg-white'>
                <p className='p-2 mb-4 bg-white rounded-xl'>
                    {blog_title }
                </p>
        </div>
    );
};

export default Bookmark;