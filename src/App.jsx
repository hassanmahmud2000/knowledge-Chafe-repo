import { useState } from "react";
import "./App.css";
import Header from "./assets/Components/Header";
import Vlogs from "./assets/Components/Vlogs/Vlogs";
import Bookmarks from "./assets/Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks,setBookmarks] = useState ([])
  const handleBookmark = blog  => {
    const newBookmarks = [...bookmarks,blog]
    setBookmarks (newBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className="flex mt-5 mx-[120px]">
        <Vlogs handleBookmark= {handleBookmark}></Vlogs>
         <Bookmarks bookmarks= {bookmarks} ></Bookmarks>
      </div>
    </>
  );
}

export default App;
