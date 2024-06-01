import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./Components/Layout";
import Public from "./Components/Public";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
