import React from "react";
import { Route, Routes as Routers } from "react-router-dom";

import Menu from "./pages/Menu/index";
import Login from "./pages/Login/index";
import Posts from "./pages/Posts/index";

export default function Routes() {
   return(
       <Routers>
           <Route path="/" element={<Login/>} />
           <Route path="/Menu" element={<Menu/>} />
           <Route path="/posts" element={<Posts/>} />
       </Routers>
   )
}