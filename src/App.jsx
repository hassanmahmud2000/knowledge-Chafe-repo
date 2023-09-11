import "./App.css";
import Bookmarks from "./assets/Components/Bookmarks/Bookmarks";
import Header from "./assets/Components/Header";
import Vlogs from "./assets/Components/Vlogs/Vlogs";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex mt-5 mx-[120px]">
        <Vlogs></Vlogs>
         <Bookmarks ></Bookmarks>
      </div>
    </>
  );
}

export default App;
