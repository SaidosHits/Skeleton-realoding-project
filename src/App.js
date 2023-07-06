import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import { SkeletonTheme } from "react-loading-skeleton";
import "./App.css";

function App() {
  return (
    <div className="App">
       <SkeletonTheme baseColor="#313131" highlightColor="#525252" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:userId" element={<Post />} />
        </Routes>
      </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

export default App;
