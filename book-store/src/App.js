import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddBook />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}
export default App;
