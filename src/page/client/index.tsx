import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";
// import NotFound from "../notfound/notfound.content";
// import CartDetail from "cart/cart.detail";

import { CartProvider } from "component/context/client.context";
import MenuClient from "component/menu/menu.client";
import Header from "component/header/index.client";
import Home from "./home";
import Shops from "./shop";
import Footer from "./footer";
import ProductDetail from "./product-detail";
import CartDetail from "./cart";
import CheckOut from "./checkout";

export default function Client() {
  return (
    <CartProvider>
      <Header />
      <MenuClient data="data" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
      <button className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </button>
    </CartProvider>
  );
}
