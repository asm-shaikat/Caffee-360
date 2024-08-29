import './App.css'
import Blog from './components/Blog/Blog';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmark/Bookmark';
function App() {

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between max-w-7xl mx-auto p-4 gap-8'>
          {/* <Blog></Blog> */}
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
