import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks,markasRead}) => {

    
    return (
        <div className='w-full md:w-1/3 lg:w-1/4 mt-10 md:mt-0'>
            <div className='bg-slate-200 p-2 mb-2 border-purple-800 text-purple-700 rounded-sm'>
                <p>Spend time to read: {markasRead} min</p>
            </div>
            {bookmarks.length > 0 && (
                <div className='bg-slate-500 p-4'>
                    {bookmarks.map((bookmark, index) => (
                        <Bookmark key={index} bookmark={bookmark} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Bookmarks;
