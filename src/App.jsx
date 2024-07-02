import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
