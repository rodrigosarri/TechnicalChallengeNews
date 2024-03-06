import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import { Home, Admin, Categories, Authors, News } from "src/pages";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/:slug" element={<News />} />
            <Route path="/categoria/:slug" element={<Categories />} />
            <Route path="/autor/:slug" element={<Authors />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
