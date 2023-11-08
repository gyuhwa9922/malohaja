import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup";
import Auth from "../pages/Login/Auth";
import Write from "../pages/Write";
import MyPage from "../pages/MyPage";
import Post from "../pages/Post";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth/login/:provider" element={<Auth />} />
        <Route path="/write" element={<Write />} />
        <Route path="/question/:id" element={<Post />} />

        {/* <Route path="/mypage" element={<MyPage/>}>
       <Route path="/mylike" element={</>}/>
       <Route path="/mybookmark" element={</>}/>
       </Route>  */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
