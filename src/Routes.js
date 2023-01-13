import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home/index";
import Details from "./pages/Details/index";
import Header from "./components/Header/index";
import Mainvisual from "./components/Mainvisual/index";
import MovieRow from "./components/MovieRow/index";
import Aaa from "./Aaa";

function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/123" element={<Home />} />
        <Route path="/" element={<Aaa />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Mainvisual" element={<Mainvisual />} />
        <Route path="/MovieRow" element={<MovieRow />} />
        <Route path="/details/:type/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routes;
