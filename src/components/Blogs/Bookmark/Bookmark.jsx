import React from 'react';

const Bookmark = () => {
    return (
        <>
        <div className='w-full md:w-1/3 lg:w-1/4 mt-10 md:mt-0'>
            <div className='bg-slate-200 p-2 mb-2 border-purple-800 text-purple-700 rounded-sm'>
                <p>Spend time to read: 100 min</p>
            </div>
            <div className='bg-slate-200 p-2'>
                <p className='font-semibold text-center mb-2'>Bookmark Blog: 05</p>
                <p className='p-4 mb-4 bg-white rounded-sm'>
                    Lorem, ipsum dolor.
                </p>
                <p className='p-4 mb-4 bg-white rounded-sm'>
                    Lorem, ipsum dolor.
                </p>
            </div>
         </div>   
        </>
    );
};

export default Bookmark;