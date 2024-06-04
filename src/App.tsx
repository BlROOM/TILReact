// import React, { createContext, SetStateAction, useState } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import CounterProvier from "./context/CounterContext";
// import Banner from "./components/Banner";

const App = () => {
  return (
    <CounterProvier>
      <NavBar />
      <Home />
    </CounterProvier>
  );
};

export default App;
