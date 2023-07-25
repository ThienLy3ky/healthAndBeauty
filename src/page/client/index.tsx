import { Routes, Route } from "react-router-dom";

import MenuClient from "component/menu/menu.client";
import Header from "component/header";
import Home from "./home";
import Shops from "./shop";

export default function Client() {
  return (
    <div>
      <Header />
      <MenuClient data="data" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <button className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </button>
    </div>
  );
}
