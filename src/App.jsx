import "./App.css";

import React from "react";
import Firstpage from "./Routing/Firstpage";
import Secondpage from "./Routing/Secondpage";
import Thirdpage from "./Routing/Thirdpage";
import Fourthpage from "./Routing/Fourthpage";
import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/firstpage" element={<Firstpage />}></Route>
        <Route path="/secondpage" element={<Secondpage />}></Route>
        <Route path="/thirdpage" element={<Thirdpage />}></Route>
        <Route path="/fourthpage" element={<Fourthpage />}></Route>
      </Routes>

      {/*<Firstpage />
      <Secondpage />
      <Thirdpage />
      <Fourthpage />*/}
    </div>
  );
};

export default App;
