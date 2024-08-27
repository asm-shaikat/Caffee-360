import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmark from './components/Blogs/Bookmark/Bookmark';
function App() {

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between max-w-7xl mx-auto p-4 gap-8'>
          <Blogs></Blogs>
          <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
