import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Profile from "./pages/Profile/profile";
import Posts from "./pages/Posts/posts";
import SinglePost from "./pages/SinglePost/singlepost";
import CreatePost from "./pages/CreatePost/createpost";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/posts/create" element={<CreatePost />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};
export default App;
