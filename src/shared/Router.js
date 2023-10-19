import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={</>}/>
      <Route path="/" element={</>}/>
      <Route path="/" element={</>}/>
      <Route path="/" element={</>}/>
      <Route path="/" element={</>}/>
      <Route path="/" element={</>}/>
      <Route path="/" element={</>}/>
      <Route path="/" element={</>}/>  */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
