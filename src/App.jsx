import { useState } from 'react';
import './App.css'
import Blog from './components/Blog/Blog';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
function App() {
  const [bookmarks,setBookmark] = useState([]);
  const [markasRead,setMarkasRead] = useState(0);
  const handleBookmark = (blog) => {
      const newBookmark = [...bookmarks, blog];
      setBookmark(newBookmark);
  }

  const handleMarkasRead = (id,time) => {
    setMarkasRead( markasRead + time);
    // console.log(id,time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmark(remainingBookmarks);
};



  return (
    <>
      <div className='flex flex-col md:flex-row justify-between max-w-7xl mx-auto p-4 gap-8'>
          <Blogs handleBookmark={handleBookmark} handleMarkasRead={handleMarkasRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} markasRead={markasRead}></Bookmarks>
      </div>
    </>
  )
}

export default App
