import { Routes, Route } from "react-router-dom";

import MenuClient from "component/menu/menu.client";
import Header from "component/header";
import Home from "./home";
import Shops from "./shop";
import Footer from "./footer";
import ProductDetail from "./product-detail";
import CartDetail from "./cart";
import CheckOut from "./checkout";

export default function Client() {
  return (
    <div>
      <Header />
      <MenuClient data="data" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/products/*" element={<ProductDetail />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
      <button className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </button>
    </div>
  );
}
