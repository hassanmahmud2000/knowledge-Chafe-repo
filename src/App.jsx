import { useState } from "react";
import "./App.css";
import Header from "./assets/Components/Header";
import Vlogs from "./assets/Components/Vlogs/Vlogs";
import Bookmarks from "./assets/Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks,setBookmarks] = useState ([])
  const [readingTime,setReadingTime] = useState (0)

  const handleBookmark = blog  => {
    const newBookmarks = [...bookmarks,blog]
    setBookmarks (newBookmarks);
  }

  const readingTimeHendler = time => {
    setReadingTime (readingTime + time)
  }
  return (
    <>
      <Header></Header>
      <div className="flex mt-5 mx-[120px]">
        <Vlogs handleBookmark= {handleBookmark}
        readingTimeHendler= {readingTimeHendler}></Vlogs>
         <Bookmarks bookmarks= {bookmarks} readingTime= {readingTime} ></Bookmarks>
      </div>
    </>
  );
}

export default App;
