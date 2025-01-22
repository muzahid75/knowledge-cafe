import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks,setbookmarks]=useState([])
  const [readingTime,setReadingTime]=useState(0)

  const handleBookmarkButton=(blog)=>{
    const newBookmark = [...bookmarks,blog]
    setbookmarks(newBookmark);
  }
  

  const handleReadingTime=(time,id)=>{
    const newReadingTime= readingTime+time;
    setReadingTime(newReadingTime);
    const remaining=bookmarks.filter(bookmark=> bookmark.id !==id)
    setbookmarks(remaining);
  }

  return (
    <>
      <Header />
      <div className='max-w-screen-xl mx-auto md:flex md:space-x-6 mb-5'>
        <Blogs handleReadingTime={handleReadingTime} handleBookmarkButton={handleBookmarkButton}/>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}/>
      </div>
    </>
  )
}

export default App
