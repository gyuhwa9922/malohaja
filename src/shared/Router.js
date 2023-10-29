import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup";
import Auth from "../pages/Login/Auth";
import Write from "../pages/Write";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth/login/:provider" element={<Auth />} />
        <Route path="/write" element={<Write />} />

        {/* <Route path="/mypage" element={</>}>
       <Route path="/mylike" element={</>}/>
       <Route path="/mybookmark" element={</>}/>
       </Route>
       <Route path="/" element={</>}/>
       <Route path="/" element={</>}/>  */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
