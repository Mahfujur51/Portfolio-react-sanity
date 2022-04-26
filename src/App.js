import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

import { Post } from "./components/Post";
import { Project } from "./components/Project";
import { SinglePost } from "./components/SinglePost";



function App() {
  return (
  
    <Router>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/' exact />
        <Route element={<About/>} path='/about'/>
        <Route element={<SinglePost/>} path='/post/:slug'/>
        <Route element={<Post/>} path='/post'/>
        <Route element={<Project/>} path='/project'/>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
