import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/login";
import Navigation from "./component/nav";
import Register from "./component/register";
import Instagramfeed from "./component/instagram-feed";
import Post_Create from "./component/post-upload";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Instagramfeed /> */}
      <Router>
        <Routes>
          <Route path="/create-post" element={<Post_Create />} />
          <Route path="/" element={<Navigation />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Oop's Page Not Found !</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<Instagramfeed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
